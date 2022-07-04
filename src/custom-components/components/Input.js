import { Col, Form, Input } from "antd";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../types/items";

const InputComponent = ({ id, title, colLg, label }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.INPUT,
		item: { id: id, type: ItemTypes.INPUT },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return title ? (
		<div ref={drag} className={"drag-item"}>
			Input
		</div>
	) : (
		<Col span={colLg || 24}>
			<Form.Item name={"input"} label={label || "Input"}>
				<Input />
			</Form.Item>
		</Col>
	);
};

export default InputComponent;
