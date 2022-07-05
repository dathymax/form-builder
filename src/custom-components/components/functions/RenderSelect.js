import { Select } from "antd";

const { Option } = Select;

export function checkTypeRenderSelect(type, dataEmployees, dataDepartments) {
	switch (type) {
		case "employees":
			return (
				<Select style={{ width: "100%" }}>
					{dataEmployees?.map((data) => (
						<Option
							key={`${data.employeeId}-${data.fullName}`}
							value={data.employeeId}
						>
							{data.fullName}
						</Option>
					))}
				</Select>
			);

		case "departments":
			return (
				<Select style={{ width: "100%" }}>
					{dataDepartments?.map((data) => (
						<Option
							key={`${data.departmentId}-${data.departmentName}`}
							value={data.departmentId}
						>
							{data.departmentName}
						</Option>
					))}
				</Select>
			);

		default:
			return;
	}
}
