import React from "react";
import InputCustom from "./items/Input";
import SelectCustom from "./items/Select";

const CustomContainer = ({ type, setTypeData, setColLg, setLabel }) => {
	function checkType(typeArg) {
		if (typeArg === "select") {
			return (
				<SelectCustom
					setTypeData={setTypeData}
					setColLg={setColLg}
					setLabel={setLabel}
				/>
			);
		} else if (typeArg === "input") {
			return <InputCustom setColLg={setColLg} setLabel={setLabel} />;
		}
	}

	return <div className="custom">{checkType(type)}</div>;
};

export default CustomContainer;
