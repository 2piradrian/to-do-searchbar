import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import MarkedItem from "../MarkedItem/MarkedItem";
import { ResultsContainer } from "./ResultsSt";

function Results(props) {
	const { query } = props;
	const tasks = useSelector((state) => state.tasks);

	const findMatch = (items, query) => {
		const res = items.filter((i) => {
			return i.name.toLowerCase().indexOf(query) >= 0 && query.length > 0;
		});
		return res;
	};

	const filteredItems = useMemo(() => findMatch(tasks, query), [tasks, query]);

	return (
		<ResultsContainer>
			{filteredItems.length > 0 &&
				filteredItems.map((res) => <MarkedItem {...res} key={res.name} query={query} />)}
		</ResultsContainer>
	);
}

export default Results;
