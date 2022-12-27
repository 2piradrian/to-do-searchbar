import React from "react";
import { Scrolleable } from "./ScrolleableCardSt";

function ScrolleableCard(props) {
	const { children } = props;
	return <Scrolleable>{children}</Scrolleable>;
}

export default ScrolleableCard;
