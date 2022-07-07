import React from "react";
import InputCustom from "./items/Input";
import SelectCustom from "./items/Select";
import TextAreaCustom from "./items/TextArea";
import InputNumberCustom from "./items/InputNumber";
import DateCustom from "./items/Date";
import TimeCustom from "./items/Time";
import RadioCustom from "./items/Radio";
import CheckListCustom from "./items/CheckList";
import UserCustom from "./items/User";
import FormulaCustom from "./items/Formula";

const Custom = ({type, currentIndex, setFormBuilders, objectData, setIsRequired}) => {
    function checkType(typeArg) {
        if (typeArg === "select") {
            return (
                <SelectCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            );
        } else if (typeArg === "input") {
            return (
                <InputCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            )
        } else if (typeArg === "textarea") {
            return (
                <TextAreaCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            )
        } else if (typeArg === "inputnumber") {
            return (
                <InputNumberCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            )
        } else if (typeArg === "date") {
            return (
                <DateCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            )
        } else if (typeArg === "time") {
            return (
                <TimeCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            )
        } else if (typeArg === "radio") {
            return (
                <RadioCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            )
        } else if (typeArg === "checklist") {
            return (
                <CheckListCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            )
        } else if (typeArg === "user") {
            return (
                <UserCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            )
        } else if (typeArg === "formula") {
            return (
                <FormulaCustom
                    objectData={objectData}
                    currentIndex={currentIndex}
                    setIsRequired={setIsRequired}
                    setFormBuilders={setFormBuilders}
                />
            )
        }
    }

    return <div className="custom">{checkType(type)}</div>;
};

export default Custom;
