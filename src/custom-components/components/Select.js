import {Col, Form, Select} from "antd";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../types/items";
import {checkLabel} from "./functions/CheckLabel";

const {Option} = Select;
const BasePathMock = "http://localhost:3000";

const SelectComponent = ({
                             id,
                             title,
                             typeData,
                             colLg,
                             label,
                             deleteField,
                         }) => {
    const emptyArray = [];
    const [dataEmployees, setDataEmployees] = useState([]);
    const [dataDepartments, setDataDepartments] = useState([]);
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.SELECT,
        item: {id: id, type: ItemTypes.SELECT},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    useEffect(() => {
        async function fetchData() {
            switch (typeData) {
                case "employees":
                    return await axios
                        .get(`${BasePathMock}/${typeData}`)
                        .then((response) => {
                            setDataEmployees(response?.data);
                        });

                case "departments":
                    return await axios
                        .get(`${BasePathMock}/${typeData}`)
                        .then((response) => {
                            setDataDepartments(response?.data);
                        });

                default:
                    return;
            }
        }

        fetchData().then(r => r);
    }, [typeData]);

    function checkTypeRenderSelect() {
        if (typeData === "employees") {
            return (
                <Select style={{width: "100%"}}>
                    {dataEmployees?.map((data) => (
                        <Option
                            key={`${data.employeeId}-${data.fullName}`}
                            value={data.employeeId}
                        >
                            {data.fullName}
                        </Option>
                    ))}
                </Select>
            );
        } else if (typeData === "departments") {
            return (
                <Select style={{width: "100%"}}>
                    {dataDepartments?.map((data) => (
                        <Option
                            key={`${data.departmentId}-${data.departmentName}`}
                            value={data.departmentId}
                        >
                            {data.departmentName}
                        </Option>
                    ))}
                </Select>
            );
        }
    }

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Select
        </div>
    ) : (
        <div className="drag-item-render">
            <Col span={colLg || 24}>
                <Form.Item
                    label={checkLabel(label, deleteField, "Select")}
                >
                    {typeData === "" ? (
                        <Select style={{width: "100%"}}>
                            {emptyArray?.map((data) => (
                                <Option
                                    key={`${data.id}-${data.id}`}
                                    value={data.id}
                                >
                                    {data.id}
                                </Option>
                            ))}
                        </Select>
                    ) : (
                        checkTypeRenderSelect()
                    )}
                </Form.Item>
            </Col>
        </div>
    );
};

export default SelectComponent;
