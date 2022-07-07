import React from 'react';
import BoxElement from "../../components/BoxElement";
import {Button, Form} from "antd";

function Preview({formBuilders}) {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("data", values);
    };

    return (
        <div className={"content-form-preview"}>
            <Form onFinish={onFinish} layout="vertical" form={form}>
                {formBuilders.map((formBuilder, index) => {
                    return (
                        <BoxElement
                            id={`${index}`}
                            key={index}
                            type={formBuilder.type}
                            formBuilder={formBuilder}
                        />
                    );
                })}
                <Button
                    type={"primary"}
                    htmlType={"submit"}
                    style={{margin: "20px"}}
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Preview;