import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import InputComponent from "../../components/Input";
import SelectComponent from "../../components/Select";
import { ItemTypes } from "../../types/items";
import { v4 } from "uuid";

const Content = ({ type, setType, colLg, typeData, label }) => {
	const [form] = Form.useForm();
	const [formBuilders, setFormBuilder] = useState([]);

	const elementList = [
		{
			id: 1,
			title: "Select",
			type: "select",
			element: (
				<SelectComponent
					id={v4()}
					typeData={typeData}
					colLg={colLg}
					label={label}
					setType={setType}
				/>
			),
		},
		{
			id: 2,
			title: "Input",
			type: "input",
			colLg: colLg,
			label: "label",
			setType: setType,
			element: <InputComponent id={v4()} />,
		},
	];

	const [{ isOver }, drop] = useDrop(
		() => ({
			accept: [ItemTypes.SELECT, ItemTypes.INPUT],
			drop: (item) => addElement(item.id, item.type),
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
			}),
		}),
		[type]
	);

	const addElement = (id, typeArg) => {
		console.log("data from content", id);
		const elements = elementList.filter((element) => id === element.id);
		setFormBuilder((formBuilder) => [...formBuilder, elements[0]]);
		setType(typeArg);
	};

	const onClick = (value) => {
		setType(value);
	};

	const onFinish = (values) => {
		console.log("data", JSON.stringify(values));
	};

	return (
		<div ref={drop} className="content">
			<Form onFinish={onFinish} layout="vertical" form={form}>
				<div className="content-inline">
					<Row gutter={12}>
						<Col span={12}>
							<Form.Item name="formName" label="Form name">
								<Input />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item name="formAlias" label="Form alias">
								<Input />
							</Form.Item>
						</Col>
					</Row>
				</div>
				{formBuilders.map((formbuilder) => {
					console.log("data", formbuilder);
					return (
						<div
							id={v4()}
							key={v4()}
							onClick={() => onClick(formbuilder.type)}
						>
							{React.cloneElement(formbuilder.element, {
								colLg: formbuilder.colLg,
								label: formbuilder.label,
								setType: formbuilder.setType,
							})}
						</div>
					);
				})}
				<Button htmlType="submit" type="primary">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Content;
