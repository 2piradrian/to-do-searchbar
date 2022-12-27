export function useMark(item, query) {
	const { name } = item;
	const index = name.toLowerCase().indexOf(query);

	const left = name.slice(0, index);
	const right = name.slice(index + query.length);
	const center = name.slice(index, index + query.length);

	return {
		center,
		left,
		right,
	};
}
