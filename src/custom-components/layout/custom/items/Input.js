import { Button, Form, Input, Space } from "antd";
import React from "react";

const InputCustom = ({ setColLg, setLabel }) => {
	const [form] = Form.useForm();

	const onSetup = (value) => {
		setColLg(value.col);
		setLabel(value.label);
	};

	return (
		<Form onFinish={onSetup} layout="vertical" form={form}>
			<Form.Item name="label" label="Label">
				<Input />
			</Form.Item>
			<Form.Item name="col" label="Column">
				<Input />
			</Form.Item>
			<Space>
				<Button htmlType="submit" type="primary">
					Submit
				</Button>
			</Space>
		</Form>
	);
};

export default InputCustom;
