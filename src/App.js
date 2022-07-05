import React, {useState} from "react";
import {Col, Row} from "antd";
import SideBar from "./custom-components/layout/side-bar/SideBar";
import Content from "./custom-components/layout/content/Content";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import Custom from "./custom-components/layout/custom/Custom";

function App() {
    const [type, setType] = useState("");
    const [currentIndex, setCurrentIndex] = useState();
    const [formBuilders, setFormBuilders] = useState([]);


    const onChangeCurrentIndex = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div style={{padding: "10px"}}>
            <DndProvider backend={HTML5Backend}>
                <Row gutter={24}>
                    <Col span={6}>
                        <SideBar setType={setType}/>
                    </Col>
                    <Col span={12}>
                        <Content
                            type={type}
                            setType={setType}
                            onChangeCurrentIndex={onChangeCurrentIndex}
                            formBuilders={formBuilders}
                            setFormBuilders={setFormBuilders}
                        />
                    </Col>
                    <Col span={6}>
                        <Custom
                            currentIndex={currentIndex}
                            type={type}
                            setFormBuilders={setFormBuilders}
                        />
                    </Col>
                </Row>
            </DndProvider>
        </div>
    );
}

export default App;
