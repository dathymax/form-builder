import {Form} from "antd";
import {RenderFormCustomInput} from "../../../components/functions/CheckTypeInput";
import React from "react";

const TextAreaCustom = ({setFormBuilders, currentIndex}) => {
    const [form] = Form.useForm();
    const initialKeyword = "Văn bản";

    const onSetup = (values) => {
        setFormBuilders(prev => {
            prev[currentIndex].colLg = values.col;
            prev[currentIndex].label = values.label;
            prev[currentIndex].required = values.required;
            prev[currentIndex].placeholder = values.placeholder;
            prev[currentIndex].name = values.name

            return [...prev];
        })

        form.resetFields();
    };

    return (
        <RenderFormCustomInput onSetup={onSetup} form={form} initialKeyword={initialKeyword}/>
    )
};

export default TextAreaCustom;
