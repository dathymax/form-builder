import {Col, Form, TimePicker} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const TimePickerComponent = ({
                                 id, title, colLg,
                                 label, deleteField, placeholder,
                                 name, required
                             }) => {
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
        <div ref={drag}>
            <Col span={colLg || 24}>
                <Form.Item
                    name={name}
                    labelCol={{span: 24}}
                    label={checkLabel(id, label, deleteField, "Time")}
                    required={required}
                >
                    <TimePicker style={{width: "100%"}} placeholder={placeholder}/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default TimePickerComponent;
