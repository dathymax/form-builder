import {Button, Col, Form, Input, Row, Select, Space, Switch} from "antd";
import {setValueKeywordField} from "./SetValueKeywordField";
import {removeVietnameseTones} from "./ConvertVie";
import React from "react";

const {Option} = Select;

export function checkTypeInput(type) {
    if (type === "input") {
        return "Ký tự";
    } else if (type === "textarea") {
        return "Văn bản";
    } else {
        return "Số"
    }
}

export function RenderFormCustomInput({onSetup, initialKeyword, form, isSelect}) {
    return (
        <Form onFinish={onSetup} layout="horizontal" form={form}>
            <Row wrap={true}>
                <Col span={24}>
                    <Form.Item
                        name="label"
                        label="Tên trường"
                        labelCol={{span: 24}}
                        labelAlign={"left"}
                        wrapperCol={{span: 24}}
                        initialValue={initialKeyword}
                    >
                        <Input onKeyUp={(e) => setValueKeywordField(e, form)}/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        colon={false}
                        name="required"
                        label="Bắt buộc nhập"
                        labelCol={{span: 6}}
                        labelAlign={"left"}
                        wrapperCol={{span: 18}}
                        valuePropName={"checked"}
                    >
                        <Switch/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="placeholder"
                        label="Placeholder"
                        labelCol={{span: 24}}
                        labelAlign={"left"}
                        wrapperCol={{span: 24}}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                {isSelect ? <Col span={24}>
                    <Form.Item
                        name="type"
                        label="Kiểu dữ liệu"
                        labelCol={{span: 24}}
                        labelAlign={"left"}
                        wrapperCol={{span: 24}}>
                        <Select>
                            <Option key={`employees`} value={"employees"}>
                                Employee
                            </Option>
                            <Option key={`departments`} value={"departments"}>
                                Department
                            </Option>
                        </Select>
                    </Form.Item>
                </Col> : null}
                <Col span={24}>
                    <Form.Item
                        name="col"
                        label="Chiều rộng"
                        labelCol={{span: 24}}
                        labelAlign={"left"}
                        wrapperCol={{span: 24}}
                    >
                        <Select>
                            <Option key={`10%`} value={2}>
                                10%
                            </Option>
                            <Option key={`25%`} value={6}>
                                25%
                            </Option>
                            <Option key={`50%`} value={12}>
                                50%
                            </Option>
                            <Option key={`75%`} value={16}>
                                75%
                            </Option>
                            <Option key={`100%`} value={24}>
                                100%
                            </Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="keyword"
                        label="Từ khóa hiển thị"
                        labelCol={{span: 24}}
                        labelAlign={"left"}
                        wrapperCol={{span: 24}}
                        initialValue={`{${removeVietnameseTones(initialKeyword)
                            .toLowerCase()
                            .replace(/\s/g, "_")}}`}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="name"
                        label="Từ khóa cho dữ liệu đầu vào"
                        labelCol={{span: 24}}
                        labelAlign={"left"}
                        wrapperCol={{span: 24}}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="recommend"
                        label="Gợi ý"
                        labelCol={{span: 24}}
                        labelAlign={"left"}
                        wrapperCol={{span: 24}}
                    >
                        <Input placeholder={"Nhập giá trị"}/>
                    </Form.Item>
                </Col>
            </Row>
            <Space>
                <Button htmlType="submit" type="primary">
                    Submit
                </Button>
            </Space>
        </Form>
    );
}