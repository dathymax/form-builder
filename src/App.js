import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import SideBar from "./custom-components/layout/side-bar/SideBar";
import Content from "./custom-components/layout/content/Content";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Custom from "./custom-components/layout/custom/Custom";
import { v4 } from "uuid";

function App() {
	const [type, setType] = useState("");
	const [typeData, setTypeData] = useState("");
	const [colLg, setColLg] = useState(24);
	const [label, setLabel] = useState("");

	return (
		<div style={{ padding: "10px" }}>
			<DndProvider backend={HTML5Backend}>
				<Row gutter={24}>
					<Col span={6}>
						<SideBar setType={setType} />
					</Col>
					<Col span={12}>
						<Content
							label={label}
							type={type}
							setType={setType}
							typeData={typeData}
							colLg={colLg}
						/>
					</Col>
					<Col span={6}>
						<Custom
							setLabel={setLabel}
							type={type}
							setTypeData={setTypeData}
							setColLg={setColLg}
						/>
					</Col>
				</Row>
			</DndProvider>
		</div>
	);
}

export default App;
