import { Col, Row } from "antd";
import React from "react";
import InputComponent from "../../components/Input";
import SelectComponent from "../../components/Select";

const SideBar = () => {
	return (
		<div className="sidebar">
			<Row>
				<Col span={24} style={{ marginBottom: "20px" }}>
					<SelectComponent title id={1} />
				</Col>
				<Col span={24}>
					<InputComponent title id={2} />
				</Col>
			</Row>
		</div>
	);
};

export default SideBar;
