import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useState, useEffect } from "react"
import * as qs from 'qs'
import { cleanObject, useDebounce } from "utils"
const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
	const [list, setList] = useState([])
	const [param, setParam] = useState({
		name: '',
		personId: ''
	})
	const [users, setUsers] = useState([])
	const debouncedParam = useDebounce(param, 500)
	useEffect(() => {
		fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
			if (response.ok) {
				setList(await response.json())
			}
		})
	}, [debouncedParam])

	useEffect(() => {
		fetch(`${apiUrl}/users`).then(async response => {
			if (response.ok) {
				setUsers(await response.json())
			}
		})
	}, [])

	return <div>
		<SearchPanel param={param} setParam={setParam} users={users} />
		<List list={list} users={users} />
	</div>
}