import React, { Component, createRef } from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [];

export default class FormBuilder extends Component {
	fb = createRef();
	componentDidMount() {
		$(this.fb.current).formBuilder({ formData });
	}

	render() {
		return <div id="fb-editor" ref={this.fb} />;
	}
}
