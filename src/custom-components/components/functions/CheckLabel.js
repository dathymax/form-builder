import React from "react";
import {style} from "./styles";
import {MinusCircleOutlined} from "@ant-design/icons";

export function checkLabel(id, labelArg, deleteField, labelName) {
    if (labelArg !== "") {
        return <div
            style={style}
        >
            <div>{labelArg}</div>
            <div className="actions">
                <div
                    onClick={() => deleteField(id)}
                    className="cursor-pointer close-btn"
                >
                    <MinusCircleOutlined />
                </div>
            </div>
        </div>
    } else {
        return <div
            style={style}
        >
            <div>{labelName}</div>
            <div className="actions">
                <div
                    onClick={() => deleteField}
                    className="cursor-pointer close-btn"
                >
                    <MinusCircleOutlined />
                </div>
            </div>
        </div>
    }
}