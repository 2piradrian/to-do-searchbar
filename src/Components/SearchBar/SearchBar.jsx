import React, { useState } from "react";
import Results from "../Results/Results";
import { SearchBox, SearchInput } from "./SerachBarSt";

function SearchBar() {
	const [query, setQuery] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);
	};

	return (
		<SearchBox>
			<SearchInput type="text" placeholder="Buscar tareas... 🔍" onChange={handleChange} />
			{query.length > 0 && <Results query={query} />}
		</SearchBox>
	);
}

export default SearchBar;
