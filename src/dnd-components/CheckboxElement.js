import React from "react";
import { Checkbox, Col, Form } from "antd";
import { useDrag } from "react-dnd";

function CheckboxElement({ field_id, field_label, field_value, field_layout }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "checkbox",
		item: { id: field_id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<Col ref={drag} key={field_id} span={field_layout?.layout_col}>
			<Form.Item label={field_label}>
				<Checkbox value={field_value} />
			</Form.Item>
		</Col>
	);
}

export default CheckboxElement;
