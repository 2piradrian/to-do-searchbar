import React from "react";
import { Main } from "./LayoutSt";

function Layout(props) {
	const { children } = props;
	return <Main>{children}</Main>;
}

export default Layout;
