import {Col, Form, Input} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const InputComponent = ({id, title, colLg, label, deleteField}) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.INPUT,
        item: {id: id, type: ItemTypes.INPUT},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Input
        </div>
    ) : (
        <div className={"drag-item-render"}>
            <Col span={colLg || 24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label={checkLabel(label, deleteField, "Input")}
                >
                    <Input/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default InputComponent;
