import {Col, Form, Input, Row} from "antd";
import React from "react";
import {useDrop} from "react-dnd";
import InputComponent from "../../components/Input";
import SelectComponent from "../../components/Select";
import {ItemTypes} from "../../types/items";

const Content = ({type, setType, onChangeCurrentIndex, formBuilders, setFormBuilders}) => {
    const [form] = Form.useForm();

    const elementList = [
        {
            id: 1,
            title: "Select",
            type: "select",
            element: (
                <SelectComponent/>
            ),
        },
        {
            id: 2,
            title: "Input",
            type: "input",
            element: (
                <InputComponent/>
            ),
        },
    ];

    const [, drop] = useDrop(
        () => ({
            accept: [ItemTypes.SELECT, ItemTypes.INPUT],
            drop: (item) => addElement(item.id, item.type),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [type]
    );

    const addElement = (id, typeArg) => {
        const elements = elementList.filter((element) => id === element.id);
        setFormBuilders((formBuilder) => [...formBuilder, elements[0]]);
        setType(typeArg);
        onChangeCurrentIndex(formBuilders.length);

    };

    const onDoubleClick = (value, index) => {
        setType(value);
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
                            <Form.Item name="formName" label="Form name">
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="formAlias" label="Form alias">
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
                                onDoubleClick={() =>
                                    onDoubleClick(formBuilder.type, index)
                                }
                                className="drag-item-render"
                            >
                                {React.cloneElement(formBuilder.element, {
                                    id: formBuilder.id,
                                    colLg: formBuilder.colLg,
                                    label: formBuilder.label,
                                    typeData: formBuilder?.typeData
                                })}
                            </div>
                        );
                    })}
                </div>
                {/* <div className="content-inline">
                <Button htmlType="submit" type="primary">
                    Submit
                </Button>
            </div> */}
            </Form>
        </div>
    );
};

export default Content;
