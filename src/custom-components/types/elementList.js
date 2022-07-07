import InputComponent from "../components/Input";
import TextAreaComponent from "../components/TextArea";
import InputNumberComponent from "../components/InputNumber";
import SelectComponent from "../components/Select";
import DatePickerComponent from "../components/Date";
import TimePickerComponent from "../components/Time";
import RadioComponent from "../components/Radio";
import CheckListComponent from "../components/CheckList";
import UserComponent from "../components/User";
import FormulaComponent from "../components/Formula";
import React from "react";
import FormListComponent from "../components/FormList";

export const elementList = [
    {
        id: 1,
        title: "Input",
        type: "input",
        colLg: 24,
        label: "Input",
        placeholder: "placeholder",
        required: false,
        element: (
            <InputComponent/>
        ),
    },
    {
        id: 2,
        title: "Textarea",
        type: "textarea",
        colLg: 24,
        label: "Textarea",
        placeholder: "placeholder",
        required: false,
        element: (
            <TextAreaComponent/>
        ),
    },
    {
        id: 3,
        title: "Input Number",
        type: "inputnumber",
        colLg: 24,
        label: "Input Number",
        placeholder: "placeholder",
        required: false,
        element: (
            <InputNumberComponent/>
        ),
    },
    {
        id: 4,
        title: "Select",
        type: "select",
        colLg: 24,
        label: "Select",
        placeholder: "placeholder",
        required: false,
        element: (
            <SelectComponent/>
        ),
    },
    {
        id: 5,
        title: "Date",
        type: "date",
        colLg: 24,
        label: "Date",
        required: false,
        element: (
            <DatePickerComponent/>
        ),
    },
    {
        id: 6,
        title: "Time",
        type: "time",
        colLg: 24,
        label: "Time",
        required: false,
        element: (
            <TimePickerComponent/>
        ),
    },
    {
        id: 7,
        title: "Radio",
        type: "radio",
        colLg: 24,
        label: "Radio",
        placeholder: "placeholder",
        required: false,
        element: (
            <RadioComponent/>
        ),
    },
    {
        id: 8,
        title: "Check List",
        type: "checklist",
        colLg: 24,
        label: "Check List",
        placeholder: "placeholder",
        required: false,
        element: (
            <CheckListComponent/>
        ),
    },
    {
        id: 9,
        title: "User",
        type: "user",
        colLg: 24,
        label: "User",
        placeholder: "placeholder",
        required: false,
        element: (
            <UserComponent/>
        ),
    },
    {
        id: 10,
        title: "Formula",
        type: "formula",
        colLg: 24,
        label: "Formula",
        placeholder: "placeholder",
        required: false,
        element: (
            <FormulaComponent/>
        ),
    },
    {
        id: 11,
        title: "Form list",
        type: "formlist",
        colLg: 24,
        label: "Form list",
        placeholder: "placeholder",
        required: false,
        element: (
            <FormListComponent/>
        ),
    },
];