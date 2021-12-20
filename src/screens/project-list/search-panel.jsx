export const SearchPanel = ({ param, setParam, users }) => {
	console.log(users)
	return (
		<form>
			{/* setParam(Object.assign({},param,{name:evt.target.value}))*/}
			<input type='text' value={param.name} onChange={evt => setParam({
				...param,
				name: evt.target.value
			})} />
			<select value={param.personId} onChange={evt => setParam({
				...param,
				personId: evt.target.value
			})}>
				<option value={''}>负责人</option>
				{users.map(user =>
					<option value={user.id} key={user.id}>{user.name}</option>
				)}
			</select>
		</form>
	)
}