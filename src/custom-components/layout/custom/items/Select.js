import {Button, Form, Input, Select, Space} from "antd";
import React from "react";

const {Option} = Select;

const SelectCustom = ({setFormBuilders, currentIndex}) => {
    const [form] = Form.useForm();

    const onSetup = (value) => {
        setFormBuilders(prev => {

            prev[currentIndex].label = value.label;
            prev[currentIndex].colLg = value.col;
            prev[currentIndex].typeData = value.type;

            return [...prev];
        })
    };

    return (
        <Form onFinish={onSetup} layout="vertical" form={form}>
            <Form.Item name="label" label="Label">
                <Input/>
            </Form.Item>
            <Form.Item name="type" label="Type">
                <Select>
                    <Option key={`employees`} value={"employees"}>
                        Employee
                    </Option>
                    <Option key={`departments`} value={"departments"}>
                        Department
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item name="col" label="Column">
                <Input/>
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
