import React from "react";
import {
	ProgressBox,
	ProgressContent,
	ProgressName,
	ProgressBar,
	ProgressContainer,
} from "./ProgressSt";

function Progress(props) {
	const { name, quantity, finished } = props;

	const getPercent = () => {
		const percent = (finished / quantity) * 100;
		return `${percent}%`;
	};

	return (
		<ProgressBox>
			<ProgressContent>
				<ProgressName>{name}</ProgressName>
				<ProgressName>
					{finished} / {quantity}
				</ProgressName>
			</ProgressContent>
			<ProgressContainer>
				<ProgressBar style={{ width: getPercent() }} />
			</ProgressContainer>
		</ProgressBox>
	);
}

export default Progress;
