import {Col, Form, Select} from "antd";
import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const {Option} = Select;

const UserComponent = ({
                           id, title, colLg,
                           label, deleteField, placeholder,
                           name, required
                       }) => {
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
        <div ref={drag}>
            <Col span={colLg || 24}>
                <Form.Item
                    name={name}
                    labelCol={{span: 24}}
                    label={checkLabel(id, label, deleteField, "User")}
                    required={required}
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
