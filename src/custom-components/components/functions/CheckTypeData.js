import {Select} from "antd";
import React from "react";
import {checkTypeRenderSelect} from "./RenderSelect";

const {Option} = Select;

export function checkTypeData(typeData, emptyArray) {
    if (typeData === "") {
        return <Select style={{width: "100%"}}>
            {emptyArray?.map((data) => (
                <Option
                    key={`${data.id}-${data.id}`}
                    value={data.id}
                >
                    {data.id}
                </Option>
            ))}
        </Select>
    } else {
        return checkTypeRenderSelect()
    }
}