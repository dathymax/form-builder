import React from 'react';
import InputComponent from "./Input";
import SelectComponent from "./Select";
import TextAreaComponent from "./TextArea";
import InputNumberComponent from "./InputNumber";
import DatePickerComponent from "./Date";
import TimePickerComponent from "./Time";
import RadioComponent from "./Radio";
import CheckListComponent from "./CheckList";
import UserComponent from "./User";
import FormulaComponent from "./Formula";

function BoxElement({type, formBuilder}) {
    function checkTypeRenderComponent() {
        if (type === "input") {
            return <InputComponent id={formBuilder.id}
                                   colLg={formBuilder.colLg}
                                   label={formBuilder.label}
                                   required={formBuilder.required}
                                   typeData={formBuilder?.typeData}
                                   placeholder={formBuilder.placeholder}/>
        } else if (type === "textarea") {
            return <TextAreaComponent id={formBuilder.id}
                                      colLg={formBuilder.colLg}
                                      label={formBuilder.label}
                                      required={formBuilder.required}
                                      typeData={formBuilder?.typeData}
                                      placeholder={formBuilder.placeholder}/>
        } else if (type === "inputnumber") {
            return <InputNumberComponent id={formBuilder.id}
                                         colLg={formBuilder.colLg}
                                         label={formBuilder.label}
                                         required={formBuilder.required}
                                         typeData={formBuilder?.typeData}
                                         placeholder={formBuilder.placeholder}/>
        } else if (type === "select") {
            return <SelectComponent id={formBuilder.id}
                                    colLg={formBuilder.colLg}
                                    label={formBuilder.label}
                                    required={formBuilder.required}
                                    typeData={formBuilder?.typeData}
                                    placeholder={formBuilder.placeholder}/>
        } else if (type === "date") {
            return <DatePickerComponent id={formBuilder.id}
                                        colLg={formBuilder.colLg}
                                        label={formBuilder.label}
                                        required={formBuilder.required}
                                        typeData={formBuilder?.typeData}
                                        placeholder={formBuilder.placeholder}/>
        } else if (type === "time") {
            return <TimePickerComponent id={formBuilder.id}
                                        colLg={formBuilder.colLg}
                                        label={formBuilder.label}
                                        required={formBuilder.required}
                                        typeData={formBuilder?.typeData}
                                        placeholder={formBuilder.placeholder}/>
        } else if (type === "radio") {
            return <RadioComponent id={formBuilder.id}
                                   colLg={formBuilder.colLg}
                                   label={formBuilder.label}
                                   required={formBuilder.required}
                                   typeData={formBuilder?.typeData}
                                   placeholder={formBuilder.placeholder}/>
        } else if (type === "checklist") {
            return <CheckListComponent id={formBuilder.id}
                                       colLg={formBuilder.colLg}
                                       label={formBuilder.label}
                                       required={formBuilder.required}
                                       typeData={formBuilder?.typeData}
                                       placeholder={formBuilder.placeholder}/>
        } else if (type === "user") {
            return <UserComponent id={formBuilder.id}
                                  colLg={formBuilder.colLg}
                                  label={formBuilder.label}
                                  required={formBuilder.required}
                                  typeData={formBuilder?.typeData}
                                  placeholder={formBuilder.placeholder}/>
        } else if (type === "formula") {
            return <FormulaComponent id={formBuilder.id}
                                     colLg={formBuilder.colLg}
                                     label={formBuilder.label}
                                     required={formBuilder.required}
                                     typeData={formBuilder?.typeData}
                                     placeholder={formBuilder.placeholder}/>
        }
    }

    return (
        <div>
            {checkTypeRenderComponent()}
        </div>
    );
}

export default BoxElement;