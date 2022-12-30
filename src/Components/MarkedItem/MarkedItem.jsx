import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useMark } from "../../Hooks/useMark";
import { delete_task, finish_task } from "../../Redux/Actions/creators";
import { ReadyIcon, TrashIcon } from "../Task/TaskSt";
import { ItemBox, ItemName } from "./MarkedItemSt";

function MarkedItem(props) {
	const { query, status, inputRef, setQuery } = props;

	const marks = useMark(props, query.toLowerCase());
	const dispatch = useDispatch();

	const { left, center, right } = useMemo(() => marks);

	const handleClose = () => {
		inputRef.current.value = "";
		setQuery("");
	};

	return (
		<ItemBox onClick={handleClose}>
			<ItemName>
				{left}
				<span style={{ backgroundColor: "yellow", color: "black" }}>{center}</span>
				{right}
			</ItemName>
			{status === "inProgress" ? (
				<ReadyIcon onClick={() => dispatch(finish_task(props))} />
			) : (
				<TrashIcon onClick={() => dispatch(delete_task(props))} />
			)}
		</ItemBox>
	);
}

export default MarkedItem;
