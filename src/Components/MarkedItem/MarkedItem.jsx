import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useMark } from "../../Hooks/useMark";

function MarkedItem(props) {
	const { query } = props;

	const marks = useMark(props, query);

	const { left, center, right } = useMemo(() => marks);
	return (
		<p>
			{left}
			<span style={{ backgroundColor: "yellow", color: "black" }}>{center}</span>
			{right}
		</p>
	);
}

export default MarkedItem;
