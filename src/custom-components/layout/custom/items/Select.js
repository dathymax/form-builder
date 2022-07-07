import {Form} from "antd";
import React, {useEffect} from "react";
import {RenderFormCustomInput} from "../../../components/functions/CheckTypeInput";

const SelectCustom = ({setFormBuilders, currentIndex, objectData}) => {
    const [form] = Form.useForm();
    const initialKeyword = "Select";

    useEffect(() => {
        form.setFieldsValue(objectData)
    }, [form, objectData]);

    const onSetup = (value) => {
        setFormBuilders(prev => {

            prev[currentIndex].label = value.label;
            prev[currentIndex].colLg = value.col;
            prev[currentIndex].typeData = value.type;

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
