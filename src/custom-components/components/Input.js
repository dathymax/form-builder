import {Col, Form, Input} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const InputComponent = ({
                            id, title, colLg, label, name,
                            deleteField, placeholder, required
                        }) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.INPUT,
        item: {id: id, type: ItemTypes.INPUT},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Ký tự
        </div>
    ) : (
        <div ref={drag}>
            <Col span={colLg || 24}>
                <Form.Item
                    name={name}
                    labelCol={{span: 24}}
                    label={checkLabel(id, label, deleteField, "Input")}
                    required={required}
                >
                    <Input placeholder={placeholder}/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default InputComponent;
