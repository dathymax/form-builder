import {Button, Col, Form, Input, Modal, Row} from "antd";
import React, {useState} from "react";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../../types/items";
import BoxElement from "../../components/BoxElement";
import Preview from "./Preview";

const Content = ({
                     type, setType, onChangeCurrentIndex,
                     formBuilders, setFormBuilders, setObjectData
                 }) => {
    const [showPreview, setShowPreview] = useState(false);

    const elementList = [
        {
            id: 1,
            title: "Input",
            type: "input",
            colLg: 24,
            label: "Input",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
        {
            id: 2,
            title: "Textarea",
            type: "textarea",
            colLg: 24,
            label: "Textarea",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
        {
            id: 3,
            title: "Input Number",
            type: "inputnumber",
            colLg: 24,
            label: "Input Number",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
        {
            id: 4,
            title: "Select",
            type: "select",
            colLg: 24,
            label: "Select",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
        {
            id: 5,
            title: "Date",
            type: "date",
            colLg: 24,
            label: "Date",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
        {
            id: 6,
            title: "Time",
            type: "time",
            colLg: 24,
            label: "Time",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
        {
            id: 7,
            title: "Radio",
            type: "radio",
            colLg: 24,
            label: "Radio",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
        {
            id: 8,
            title: "Check List",
            type: "checklist",
            colLg: 24,
            label: "Check List",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
        {
            id: 9,
            title: "User",
            type: "user",
            colLg: 24,
            label: "User",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
        {
            id: 10,
            title: "Formula",
            type: "formula",
            colLg: 24,
            label: "Formula",
            placeholder: "placeholder",
            name: "name",
            required: false,
        },
    ];

    const handleShowPreview = () => {
        setShowPreview(true);
    }

    const handleClosePreview = () => {
        setShowPreview(false);
    }

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

    const deleteField = (index) => {
        setFormBuilders(((elements) => elements.filter((element) => element.id !== index)));
        setType("");
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

    return (<div ref={drop} className="content">
            <Form layout="vertical">
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
                                <BoxElement
                                    type={formBuilder.type}
                                    formBuilder={formBuilder}
                                    deleteField={deleteField}
                                />
                            </div>
                        );
                    })}
                </div>
                <Button type={"default"} style={{margin: "20px 20px 20px 10px"}}
                        onClick={handleShowPreview}>Preview</Button>
            </Form>

            <Modal
                title={"Preview form builder"}
                visible={showPreview}
                onOk={handleClosePreview}
                onCancel={handleClosePreview}
                width={700}
                bodyStyle={{maxHeight: 600, overflow: "auto"}}
            >
                <Preview formBuilders={formBuilders}/>
            </Modal>
        </div>
    );
};

export default Content;
