import {Form} from "antd";
import {RenderFormCustomInput} from "../../../components/functions/CheckTypeInput";
import React from "react";

const UserCustom = ({setFormBuilders, currentIndex}) => {
    const [form] = Form.useForm();
    const initialKeyword = "User";

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

export default UserCustom;
