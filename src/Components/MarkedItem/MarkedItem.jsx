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

	const handleFinish = () => {
		const task = { ...props, inputRef: null };
		dispatch(finish_task(task));
	};

	return (
		<ItemBox onClick={handleClose}>
			<ItemName>
				{left}
				<span style={{ backgroundColor: "yellow", color: "black" }}>{center}</span>
				{right}
			</ItemName>
			{status === "inProgress" ? (
				<ReadyIcon onClick={() => handleFinish()} />
			) : (
				<TrashIcon onClick={() => dispatch(delete_task(props))} />
			)}
		</ItemBox>
	);
}

export default MarkedItem;
