import React from "react";
import {style} from "./styles";

export function checkLabel(labelArg, deleteField, labelName) {
    if (labelArg !== "") {
        return <div
            style={style}
        >
            <div>{labelArg}</div>
            <div className="actions">
                <div
                    onClick={() => deleteField}
                    className="cursor-pointer"
                >
                    X
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
                    className="cursor-pointer"
                >
                    X
                </div>
            </div>
        </div>
    }
}