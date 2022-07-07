import {Col, Form, Input} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const FormulaComponent = ({
                              id, title, colLg, label,
                              deleteField, placeholder,
                              name, required
                          }) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.FORMULA,
        item: {id: id, type: ItemTypes.FORMULA},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Công thức
        </div>
    ) : (
        <div ref={drag}>
            <Col span={colLg || 24}>
                <Form.Item
                    name={name}
                    labelCol={{span: 24}}
                    label={checkLabel(id, label, deleteField, "Formula")}
                    required={required}
                >
                    <Input placeholder={placeholder}/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default FormulaComponent;
