import {Checkbox, Col, Form} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const CheckListComponent = ({id, title, colLg, label, deleteField}) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.CHECKLIST,
        item: {id: id, type: ItemTypes.CHECKLIST},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Check list
        </div>
    ) : (
        <div ref={drag}>
            <Col span={colLg || 24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label={checkLabel(id, label, deleteField, "Check list")}
                >
                    <Checkbox/>
                </Form.Item>
            </Col>
        </div>
    );
};

export default CheckListComponent;
