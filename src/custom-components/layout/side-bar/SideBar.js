import {Col, Row} from "antd";
import React from "react";
import InputComponent from "../../components/Input";
import SelectComponent from "../../components/Select";
import TextAreaComponent from "../../components/TextArea";
import InputNumberComponent from "../../components/InputNumber";
import DatePickerComponent from "../../components/Date";
import TimePickerComponent from "../../components/Time";
import RadioComponent from "../../components/Radio";
import CheckListComponent from "../../components/CheckList";
import UserComponent from "../../components/User";
import FormulaComponent from "../../components/Formula";

const SideBar = () => {
    return (
        <div className="sidebar">
            <Row>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <InputComponent title id={1}/>
                </Col>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <TextAreaComponent title id={2}/>
                </Col>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <InputNumberComponent title id={3}/>
                </Col>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <SelectComponent title id={4}/>
                </Col>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <DatePickerComponent title id={5}/>
                </Col>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <TimePickerComponent title id={6}/>
                </Col>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <RadioComponent title id={7}/>
                </Col>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <CheckListComponent title id={8}/>
                </Col>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <UserComponent title id={9}/>
                </Col>
                <Col span={24} style={{marginBottom: "20px"}}>
                    <FormulaComponent title id={10}/>
                </Col>
                {/*<Col span={24} style={{marginBottom: "20px"}}>*/}
                {/*    <FormListComponent title id={11}/>*/}
                {/*</Col>*/}
            </Row>
        </div>
    );
};

export default SideBar;
