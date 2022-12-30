import React, { useRef, useState } from "react";
import Results from "../Results/Results";
import { SearchBox, SearchInput } from "./SerachBarSt";

function SearchBar() {
	const [query, setQuery] = useState("");
	const inputRef = useRef("");

	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);
	};

	return (
		<SearchBox>
			<SearchInput
				type="text"
				placeholder="Buscar tareas... 🔍"
				onChange={handleChange}
				ref={inputRef}
			/>
			{query.length > 0 && <Results query={query} inputRef={inputRef} setQuery={setQuery} />}
		</SearchBox>
	);
}

export default SearchBar;
