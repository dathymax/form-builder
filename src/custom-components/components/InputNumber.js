import {Col, Form, InputNumber} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const InputNumberComponent = ({
                                  id, title, colLg, label,
                                  deleteField, placeholder,
                                  name, required
                              }) => {
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
        <div ref={drag}>
            <Col span={colLg || 24}>
                <Form.Item
                    name={name}
                    labelCol={{span: 24}}
                    label={checkLabel(id, label, deleteField, "Input Number")}
                    required={required}
                >
                    <InputNumber placeholder={placeholder} style={{width: "100%"}}/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default InputNumberComponent;
