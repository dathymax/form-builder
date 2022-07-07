import {Col, Form, Input} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const InputNumberComponent = ({id, title, colLg, label, deleteField, placeholder}) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.INPUTNUMBER,
        item: {id: id, type: ItemTypes.INPUTNUMBER},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Số
        </div>
    ) : (
        <div className={"drag-item-render"}>
            <Col span={colLg || 24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label={checkLabel(label, deleteField, "Input Number")}
                >
                    <Input placeholder={placeholder}/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default InputNumberComponent;
