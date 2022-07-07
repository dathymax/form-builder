import {Form} from "antd";
import React from "react";
import {RenderFormCustomInput} from "../../../components/functions/CheckTypeInput";

const InputNumberCustom = ({setFormBuilders, currentIndex}) => {
    const [form] = Form.useForm();
    const initialKeyword = "Số";

    const onSetup = (values) => {
        setFormBuilders(prev => {
            prev[currentIndex].colLg = values.col;
            prev[currentIndex].label = values.label;
            prev[currentIndex].required = values.required;
            prev[currentIndex].placeholder = values.placeholder;

            return [...prev];
        })

        form.resetFields();
    };

    return (
        <RenderFormCustomInput onSetup={onSetup} form={form} initialKeyword={initialKeyword}/>
    );
};

export default InputNumberCustom;
