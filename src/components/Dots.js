import React from 'react';
import styled from 'styled-components';
import device from '../utils/device'

const Div = styled.div`
	position: fixed;
	top: 45vh;
	right: 5vw;
	display: flex;
	flex-direction: column;

	@media ${device.mobile} {
		display: none;
	}
`;

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

const selectGreenColorForDots = (dotNumber) => {
	const dost = new Array(3).fill({});
	return dost.map((v, i) => dotNumber === i ? (<Green id={`dot${i}`} key={i} />) : (<White id={`dot${i}`} key={i} />));
};

const Dots = ({ selectDot = 0 }) => {
	return (
		<Div id='dots'>
			{selectGreenColorForDots(selectDot)}
		</Div>
	);
};

export default Dots;