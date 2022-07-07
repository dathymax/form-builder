import {Col, DatePicker, Form} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const DatePickerComponent = ({
                                 id, title, colLg,
                                 label, deleteField, placeholder,
                                 name, required
                             }) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.DATE,
        item: {id: id, type: ItemTypes.DATE},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Ngày
        </div>
    ) : (
        <div ref={drag}>
            <Col span={colLg || 24}>
                <Form.Item
                    name={name}
                    labelCol={{span: 24}}
                    label={checkLabel(id, label, deleteField, "Date")}
                    required={required}
                >
                    <DatePicker style={{width: "100%"}} placeholder={placeholder}/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default DatePickerComponent;
