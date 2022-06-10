import React from 'react';
import {Checkbox, Col, Form} from "antd";

function CheckboxElement({field_id, field_label, field_value, field_layout}) {
    return (
        <Col
            key={field_id}
            span={field_layout.layout_col}
        >
            <Form.Item
                label={field_label}
            >
                <Checkbox value={field_value}/>
            </Form.Item>
        </Col>
    );
}

export default CheckboxElement;