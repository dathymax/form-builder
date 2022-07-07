import {removeVietnameseTones} from "./ConvertVie";

export const setValueKeywordField = (e, form) => {
    form.setFieldsValue({
        keyword: `{${removeVietnameseTones(e.target.value)
            .toLowerCase()
            .replace(/\s/g, "_")}}`
    })
}