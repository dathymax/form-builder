import {Col, Form, TimePicker} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const TimePickerComponent = ({id, title, colLg, label, deleteField, placeholder}) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.TIME,
        item: {id: id, type: ItemTypes.TIME},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Giờ
        </div>
    ) : (
        <div className={"drag-item-render"}>
            <Col span={colLg || 24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label={checkLabel(label, deleteField, "Time")}
                >
                    <TimePicker style={{width: "100%"}} placeholder={placeholder}/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default TimePickerComponent;
