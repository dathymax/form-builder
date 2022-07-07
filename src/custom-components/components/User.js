import {Col, Form, Select} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const {Option} = Select;

const UserComponent = ({id, title, colLg, label, deleteField, placeholder}) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.USER,
        item: {id: id, type: ItemTypes.USER},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return title ? (
        <div ref={drag} className={"drag-item"}>
            User
        </div>
    ) : (
        <div className={"drag-item-render"}>
            <Col span={colLg || 24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label={checkLabel(label, deleteField, "User")}
                >
                    <Select style={{width: "100%"}} placeholder={placeholder}>
                        <Option
                            key={`1`}
                            value={1}
                        >
                            Option 1
                        </Option>
                    </Select>
                </Form.Item>
            </Col>
        </div>
    );
};

export default UserComponent;
