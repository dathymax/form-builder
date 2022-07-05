import React from "react";
import InputCustom from "./items/Input";
import SelectCustom from "./items/Select";

const Custom = ({type, currentIndex, setFormBuilders}) => {
    function checkType(typeArg) {
        if (typeArg === "select") {
            return (
                <SelectCustom
                    setFormBuilders={setFormBuilders}
                    currentIndex={currentIndex}
                />
            );
        } else if (typeArg === "input") {
            return <InputCustom setFormBuilders={setFormBuilders}
                                currentIndex={currentIndex}/>;
        }
    }

    return <div className="custom">{checkType(type)}</div>;
};

export default Custom;
