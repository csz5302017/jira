import { useState, useEffect } from "react";
//清理对象的空值
export const isFalsy = (value: unknown): boolean => value === 0 ? false : !value
export const cleanObject = (object: object) => {
	const result = { ...object }
	Object.keys(result).forEach((key: string) => {
		//@ts-ignore
		const value = result[key];
		if (isFalsy(value)) {
			//@ts-ignore
			delete result[key]
		}
	})
	return result
}
export const useDebounce = <V> (value: V, delay?: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value)
	useEffect(() => {
		let timeout = setTimeout(() => setDebouncedValue(value), delay)
		return () => clearTimeout(timeout)
	}, [value, delay])
	return debouncedValue
}