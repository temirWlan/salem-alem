import React from 'react';
import styled from 'styled-components';

import icon from '../../images/state-icons/close.svg';


const ErrorBlock = styled.div`
	width: 100px;
	height: 100px;
	animation: 0.5s linear 0.7s infinite alternate slidein;
`;

export default function Error() {
	return <ErrorBlock><img src={icon} alt="close" /></ErrorBlock>
}




