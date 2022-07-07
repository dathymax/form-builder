import {Form} from "antd";
import React from "react";
import {RenderFormCustomInput} from "../../../components/functions/CheckTypeInput";

const FormulaCustom = ({setFormBuilders, currentIndex}) => {
    const [form] = Form.useForm();
    const initialKeyword = "Formula";

    const onSetup = (value) => {
        setFormBuilders(prev => {

            prev[currentIndex].label = value.label;
            prev[currentIndex].colLg = value.col;

            return [...prev];
        })

        form.resetFields();
    };

    return (
        <RenderFormCustomInput onSetup={onSetup} form={form} initialKeyword={initialKeyword}/>
    );
};

export default FormulaCustom;
