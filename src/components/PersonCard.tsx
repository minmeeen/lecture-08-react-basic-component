type PersonProps = {
	name: string;
	age: number;
	gender: 'male' | 'female'
}

const PersonCard = ({name, age, gender}: PersonProps) => {

	const computeOldMsg = () => {
		if (age >= 50) return 'Old man'
		else return 'Young man'
	}

	return (
		<div style={
			{
				backgroundColor: "magenta",
				color: 'yellow'
			}
		}>
			<p>name : {name}</p>
			<p>age : {age}</p>
			<p>gender : {gender}</p>
			<p>{computeOldMsg()}</p>
		</div>
	)
}
export default PersonCard