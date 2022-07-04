import React, { createRef, useEffect } from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [];

function FormBuilder() {
	const fb = createRef();

	useEffect(() => {
		$(fb.current).formBuilder({ formData });
	}, [formData]);

	console.log("data", $(fb));

	return <div id="fb-editor" ref={fb} />;
}

export default FormBuilder;
