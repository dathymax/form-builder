import React from 'react';
import InputElement from "./elements/Input";
import SelectElement from "./elements/Select";
import CheckboxElement from "./elements/Checkbox";

function Elements({field: {field_type, field_id,
    field_label, field_placeholder, field_value,
    field_options, field_layout}}) {
    switch (field_type) {
        case "input":
            return (<InputElement
                field_id={field_id}
                field_value={field_value}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_layout={field_layout}
            />)
        case "select":
            return (<SelectElement
                field_id={field_id}
                field_value={field_value}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_options={field_options}
                field_layout={field_layout}
            />)
        case "checkbox":
            return (<CheckboxElement
                field_id={field_id}
                field_value={field_value}
                field_label={field_label}
                field_layout={field_layout}
            />)
        default:
            return null;
    }
}

export default Elements;