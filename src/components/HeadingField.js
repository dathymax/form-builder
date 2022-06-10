import { Col, Form, Input } from "antd";
import React from "react";

const HeadingField = (props) => {
	return (
		<Col span={props.span}>
			<Form.Item label={props.label || "Label"}>
				<Input style={{ width: "100%" }} />
			</Form.Item>
		</Col>
	);
};

export default HeadingField;
