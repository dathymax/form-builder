import {Col, Form} from "antd";
import React from "react";
import {useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "../types/items";
import {CloseOutlined, PlusCircleOutlined} from "@ant-design/icons";
import InputComponent from "./Input";
import TextAreaComponent from "./TextArea";
import InputNumberComponent from "./InputNumber";
import SelectComponent from "./Select";
import DatePickerComponent from "./Date";
import TimePickerComponent from "./Time";
import RadioComponent from "./Radio";
import CheckListComponent from "./CheckList";
import UserComponent from "./User";
import FormulaComponent from "./Formula";

const FormListComponent = ({
                               id, title, colLg,
                               type, setType, onChangeCurrentIndex,
                               formBuilders, setFormBuilders, setObjectData
                           }) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.FORMLIST,
        item: {id: id, type: ItemTypes.FORMLIST},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const elementList = [
        {
            id: 1,
            title: "Input",
            type: "input",
            colLg: 24,
            label: "Input",
            placeholder: "placeholder",
            required: false,
            element: (
                <InputComponent/>
            ),
        },
        {
            id: 2,
            title: "Textarea",
            type: "textarea",
            colLg: 24,
            label: "Textarea",
            placeholder: "placeholder",
            required: false,
            element: (
                <TextAreaComponent/>
            ),
        },
        {
            id: 3,
            title: "Input Number",
            type: "inputnumber",
            colLg: 24,
            label: "Input Number",
            placeholder: "placeholder",
            required: false,
            element: (
                <InputNumberComponent/>
            ),
        },
        {
            id: 4,
            title: "Select",
            type: "select",
            colLg: 24,
            label: "Select",
            placeholder: "placeholder",
            required: false,
            element: (
                <SelectComponent/>
            ),
        },
        {
            id: 5,
            title: "Date",
            type: "date",
            colLg: 24,
            label: "Date",
            required: false,
            element: (
                <DatePickerComponent/>
            ),
        },
        {
            id: 6,
            title: "Time",
            type: "time",
            colLg: 24,
            label: "Time",
            required: false,
            element: (
                <TimePickerComponent/>
            ),
        },
        {
            id: 7,
            title: "Radio",
            type: "radio",
            colLg: 24,
            label: "Radio",
            placeholder: "placeholder",
            required: false,
            element: (
                <RadioComponent/>
            ),
        },
        {
            id: 8,
            title: "Check List",
            type: "checklist",
            colLg: 24,
            label: "Check List",
            placeholder: "placeholder",
            required: false,
            element: (
                <CheckListComponent/>
            ),
        },
        {
            id: 9,
            title: "User",
            type: "user",
            colLg: 24,
            label: "User",
            placeholder: "placeholder",
            required: false,
            element: (
                <UserComponent/>
            ),
        },
        {
            id: 10,
            title: "Formula",
            type: "formula",
            colLg: 24,
            label: "Formula",
            placeholder: "placeholder",
            required: false,
            element: (
                <FormulaComponent/>
            ),
        },
        {
            id: 11,
            title: "Form list",
            type: "formlist",
            colLg: 24,
            label: "Form list",
            placeholder: "placeholder",
            required: false,
            element: (
                <FormListComponent/>
            ),
        },
    ];

    const [, drop] = useDrop(
        () => ({
            accept: [
                ItemTypes.SELECT, ItemTypes.INPUT, ItemTypes.TEXTAREA,
                ItemTypes.DATE, ItemTypes.CHECKLIST, ItemTypes.FORMULA,
                ItemTypes.TIME, ItemTypes.RADIO, ItemTypes.USER,
                ItemTypes.INPUTNUMBER, ItemTypes.FILE
            ],
            drop: (item) => addElement(item.id, item.type),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [type]
    );

    const addElement = (idArg, typeArg) => {
        const elements = elementList.filter((element) => idArg === element.id);
        setFormBuilders((formBuilder) => [...formBuilder, elements[0]]);
        setType(typeArg);
        onChangeCurrentIndex(formBuilders.length);
    };

    const onDoubleClick = (e, typeArg, colLgArg, labelArg, typeDataArg, placeholderArg, index) => {
        e.preventDefault();

        let object;

        object = {
            type: typeArg,
            colLg: colLgArg,
            label: labelArg,
            typeData: typeDataArg,
            placeholder: placeholderArg,
        }

        setObjectData(object);

        setType(typeArg);
        onChangeCurrentIndex(index);
    };

    return title ? (
        <div ref={drag} className={"drag-item"}>
            Biểu mẫu động
        </div>
    ) : (
        <div ref={drag} className={"drag-item-render form-list-render"}>
            <div ref={drop} className={"form-list-drop"}>
                <Col span={colLg || 24}>
                    <Form.List name={"names"}>
                        {(fields, {add, remove}) => (
                            <>
                                {fields.map(({key, name, fieldKey, ...restField}, index) => (
                                    <>
                                        <div className="content-form-builder">
                                            {formBuilders.map((formBuilder, index) => {
                                                return (
                                                    <div
                                                        id={`${index}`}
                                                        key={index}
                                                        onDoubleClick={(e) =>
                                                            onDoubleClick(
                                                                e,
                                                                formBuilder.type,
                                                                formBuilder.colLg,
                                                                formBuilder.label,
                                                                formBuilder.typeData,
                                                                formBuilder.placeholder,
                                                                index
                                                            )
                                                        }
                                                        className="drag-item-render"
                                                    >
                                                        {React.cloneElement(formBuilder.element, {
                                                            id: formBuilder.id,
                                                            colLg: formBuilder.colLg,
                                                            label: formBuilder.label,
                                                            required: formBuilder.required,
                                                            typeData: formBuilder?.typeData,
                                                            placeholder: formBuilder.placeholder,
                                                        })}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {fields.length > 1 ? (
                                            <Form.Item
                                                label={!!name && null}
                                            >
                                                <CloseOutlined
                                                    onClick={() =>
                                                        remove(name)
                                                    }
                                                />
                                            </Form.Item>
                                        ) : null}
                                    </>
                                ))}
                                {
                                    fields.length > 0 ?
                                        <Form.Item>
                                            <PlusCircleOutlined
                                                onClick={() => add()}
                                                style={{fontSize: 20}}
                                            />
                                        </Form.Item> : null
                                }
                            </>
                        )}
                    </Form.List>
                </Col>
            </div>
        </div>
    );
};

export default FormListComponent;
