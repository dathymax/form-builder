import React from 'react';
import {Col, Form, Input} from "antd";

function InputElement({field_id, field_label, field_placeholder, field_value, field_layout}) {
    return (
        <Col
            key={field_id}
            span={field_layout.layout_col}
        >
            <Form.Item
                label={field_label}
            >
                <Input
                    type={"text"}
                    placeholder={field_placeholder ? field_placeholder : ""}
                    value={field_value}
                />
            </Form.Item>
        </Col>
    );
}

export default InputElement;