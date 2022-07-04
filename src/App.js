import React from "react";
import "./style/main.scss";

function App() {
	return (
		<>
			<div>
				<FormBuilder onSubmit={(data) => console.log(data)} />
			</div>
		</>
	);
}

export default App;
