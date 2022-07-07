import {Form} from "antd";
import React, {useEffect} from "react";
import {RenderFormCustomInput} from "../../../components/functions/CheckTypeInput";

const SelectCustom = ({setFormBuilders, currentIndex, objectData}) => {
    const [form] = Form.useForm();
    const initialKeyword = "Select";

    useEffect(() => {
        form.setFieldsValue(objectData)
    }, [form, objectData]);

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
        <RenderFormCustomInput
            onSetup={onSetup}
            form={form}
            initialKeyword={initialKeyword}
            isSelect={true}
        />
    );
};

export default SelectCustom;
