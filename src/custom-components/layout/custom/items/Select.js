import { Button, Form, Input, Select, Space } from "antd";
import React from "react";

const { Option } = Select;

const SelectCustom = ({ setTypeData, setColLg, setLabel }) => {
	const [form] = Form.useForm();

	const onChangeLabel = (e) => {
		setLabel(e.target.value);
		console.log("data", e.target.value);
	};

	const onChangeColumn = (e) => {
		setColLg(e.target.value);
		console.log("data", e.target.value);
	};

	const onChangeTypeData = (e) => {
		setTypeData(e);
		console.log("data", e);
	};

	const onSetup = (value) => {
		setTypeData(value.type);
		setColLg(value.col);
		setLabel(value.label);
	};

	return (
		<Form onFinish={onSetup} layout="vertical" form={form}>
			<Form.Item name="label" label="Label">
				<Input onKeyUp={onChangeLabel} />
			</Form.Item>
			<Form.Item name="type" label="Type">
				<Select onChange={(e) => onChangeTypeData(e)}>
					<Option key={`employees`} value={"employees"}>
						Employee
					</Option>
					<Option key={`departments`} value={"departments"}>
						Department
					</Option>
				</Select>
			</Form.Item>
			<Form.Item name="col" label="Column">
				<Input onKeyUp={onChangeColumn} />
			</Form.Item>
			<Space>
				<Button htmlType="submit" type="primary">
					Submit
				</Button>
			</Space>
		</Form>
	);
};

export default SelectCustom;
