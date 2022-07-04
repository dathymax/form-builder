import axios from "axios";

const BasePathMock = "http://localhost:3000";

export function checkTypeChooseApi(type, setDataEmployees, setDataDepartments) {
	switch (type) {
		case "employees":
			return axios.get(`${BasePathMock}/${type}`).then((response) => {
				console.log("data", response);
				setDataEmployees(response?.data);
			});

		case "departments":
			return axios.get(`${BasePathMock}/${type}`).then((response) => {
				console.log("data", response);
				setDataDepartments(response?.data);
			});

		default:
			return;
	}
}
