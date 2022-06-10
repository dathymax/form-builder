import React from 'react';
import {Col, Form, Select} from "antd";

const {Option} = Select

function SelectElement({field_id, field_label, field_placeholder, field_layout, field_options}) {
    return (
        <Col
            key={field_id}
            span={field_layout.layout_col}
        >
            <Form.Item
                label={field_label}
            >
                <Select
                    style={{width: "100%"}}
                    placeholder={field_placeholder ? field_placeholder : ""}
                >
                    {field_options.length > 0 && field_options?.map((option, i) => (
                        <Option
                            value={option.option_label}
                            key={i}
                        >
                            {option.option_label}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
        </Col>
    );
}

export default SelectElement;