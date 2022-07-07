import {Col, Form, Radio} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const RadioComponent = ({id, title, colLg, label, deleteField}) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.RADIO,
        item: {id: id, type: ItemTypes.RADIO},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Radio
        </div>
    ) : (
        <div className={"drag-item-render"}>
            <Col span={colLg || 24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label={checkLabel(label, deleteField, "Radio")}
                >
                    <Radio/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default RadioComponent;
