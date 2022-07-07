import {Col, Form, Input} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const TextAreaComponent = ({id, title, colLg, label, deleteField, placeholder}) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.TEXTAREA,
        item: {id: id, type: ItemTypes.TEXTAREA},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Văn bản
        </div>
    ) : (
        <div className={"drag-item-render"}>
            <Col span={colLg || 24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label={checkLabel(label, deleteField, "Textarea")}
                >
                    <Input.TextArea placeholder={placeholder}/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default TextAreaComponent;
