import React from 'react';
import styled from 'styled-components';
import device from '../utils/device'

const Dot = styled.div`
	border-radius: 50%;
	width: 15px;
  height: 15px;
	margin-bottom: 22px;
`;

const Green = styled(Dot)`
  background-color: #25eb98;
`;

const White = styled(Dot)`
  background-color: #eff0f1;
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	@media ${device.mobile} {
		display: none;
	}
`;

const selectGreenColorForDots = (dotNumber) => {
	const dost = new Array(3).fill({});
	return dost.map((v, i) => dotNumber === i ? (<Green key={i} />) : (<White key={i} />));
}

const Dots = ({ selectDot = 0 }) => {
	return (
		<Div>
			{selectGreenColorForDots(selectDot)}
		</Div>
	);
};

export default Dots;