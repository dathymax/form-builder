import {Button, Form, Input, Space} from "antd";
import React from "react";

const InputCustom = ({ setFormBuilders, currentIndex}) => {
    const [form] = Form.useForm();

    const onSetup = (value) => {
        setFormBuilders(prev => {

            prev[currentIndex].label = value.label;
            prev[currentIndex].colLg = value.col;

            return [...prev];
        })
    };

    return (
        <Form onFinish={onSetup} layout="vertical" form={form}>
            <Form.Item name="label" label="Label">
                <Input/>
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

export default InputCustom;
