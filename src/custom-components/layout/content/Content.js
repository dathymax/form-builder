import {Col, Form, Input, Row} from "antd";
import React from "react";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../../types/items";
import InputComponent from "../../components/Input";
import TextAreaComponent from "../../components/TextArea";
import InputNumberComponent from "../../components/InputNumber";
import SelectComponent from "../../components/Select";
import DatePickerComponent from "../../components/Date";
import TimePickerComponent from "../../components/Time";
import RadioComponent from "../../components/Radio";
import CheckListComponent from "../../components/CheckList";
import UserComponent from "../../components/User";
import FormulaComponent from "../../components/Formula";
import BoxElement from "../../components/BoxElement";

const Content = ({
                     type, setType, onChangeCurrentIndex,
                     formBuilders, setFormBuilders,
                     currentIndex, setObjectData
                 }) => {
    const [form] = Form.useForm();

    const elementList = [
        {
            id: 1,
            title: "Input",
            type: "input",
            colLg: 24,
            label: "Input",
            placeholder: "placeholder",
            required: false,
            // element: (
            //     <InputComponent/>
            // ),
        },
        {
            id: 2,
            title: "Textarea",
            type: "textarea",
            colLg: 24,
            label: "Textarea",
            placeholder: "placeholder",
            required: false,
            // element: (
            //     <TextAreaComponent/>
            // ),
        },
        {
            id: 3,
            title: "Input Number",
            type: "inputnumber",
            colLg: 24,
            label: "Input Number",
            placeholder: "placeholder",
            required: false,
            // element: (
            //     <InputNumberComponent/>
            // ),
        },
        {
            id: 4,
            title: "Select",
            type: "select",
            colLg: 24,
            label: "Select",
            placeholder: "placeholder",
            required: false,
            // element: (
            //     <SelectComponent/>
            // ),
        },
        {
            id: 5,
            title: "Date",
            type: "date",
            colLg: 24,
            label: "Date",
            required: false,
            // element: (
            //     <DatePickerComponent/>
            // ),
        },
        {
            id: 6,
            title: "Time",
            type: "time",
            colLg: 24,
            label: "Time",
            required: false,
            // element: (
            //     <TimePickerComponent/>
            // ),
        },
        {
            id: 7,
            title: "Radio",
            type: "radio",
            colLg: 24,
            label: "Radio",
            placeholder: "placeholder",
            required: false,
            // element: (
            //     <RadioComponent/>
            // ),
        },
        {
            id: 8,
            title: "Check List",
            type: "checklist",
            colLg: 24,
            label: "Check List",
            placeholder: "placeholder",
            required: false,
            // element: (
            //     <CheckListComponent/>
            // ),
        },
        {
            id: 9,
            title: "User",
            type: "user",
            colLg: 24,
            label: "User",
            placeholder: "placeholder",
            required: false,
            // element: (
            //     <UserComponent/>
            // ),
        },
        {
            id: 10,
            title: "Formula",
            type: "formula",
            colLg: 24,
            label: "Formula",
            placeholder: "placeholder",
            required: false,
            // element: (
            //     <FormulaComponent/>
            // ),
        },
        // {
        //     id: 11,
        //     title: "Form list",
        //     type: "formlist",
        //     colLg: 24,
        //     label: "Form list",
        //     placeholder: "placeholder",
        //     required: false,
        //     element: (
        //         <FormListComponent/>
        //     ),
        // },
    ];

    const [, drop] = useDrop(
        () => ({
            accept: [
                ItemTypes.SELECT, ItemTypes.INPUT, ItemTypes.TEXTAREA,
                ItemTypes.DATE, ItemTypes.CHECKLIST, ItemTypes.FORMULA,
                ItemTypes.TIME, ItemTypes.RADIO, ItemTypes.USER,
                ItemTypes.INPUTNUMBER, ItemTypes.FILE, ItemTypes.FORMLIST
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

    const deleteElement = () => {
        setFormBuilders(((elements) => elements.filter((element) => element.id !== currentIndex)));
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

    const onFinish = (values) => {
        console.log("data", JSON.stringify(values));
    };

    return (<div ref={drop} className="content">
            <Form onFinish={onFinish} layout="vertical" form={form}>
                <div className="content-inline">
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item name="formName" label="Tên form">
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="formAlias" label="Ký hiệu form">
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
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
                                {/*{React.cloneElement(formBuilder.element, {*/}
                                {/*    id: formBuilder.id,*/}
                                {/*    colLg: formBuilder.colLg,*/}
                                {/*    label: formBuilder.label,*/}
                                {/*    required: formBuilder.required,*/}
                                {/*    typeData: formBuilder?.typeData,*/}
                                {/*    placeholder: formBuilder.placeholder,*/}
                                {/*    deleteField: deleteElement,*/}
                                {/*})}*/}
                                <BoxElement type={formBuilder.type} formBuilder={formBuilder}/>
                            </div>
                        );
                    })}
                </div>
            </Form>
        </div>
    );
};

export default Content;
