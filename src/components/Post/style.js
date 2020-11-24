import styled from 'styled-components';

import { Row } from '../Profile/style';
import { Block } from '../../shared/Blocks';


export const PostBlock = styled(Block)`
	max-width: 550px;
	width: 100%;
	margin: 0 auto;
	padding: 27px 25px 19px 25px;

	&:not(:first-child) {
		margin-top: 40px;
	}
`;

export const Title = styled.h3`
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #000;
	margin-bottom: 0;
`;

export const PostDateDescription = styled.span`
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	color: #847777;
`; 

export const PreviewBG = styled.div`
	max-width: 500px;
	max-height: 300px;
`;

export const Text = styled.p`
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 14px;
	line-height: 150%;
	color: #000;
`;

export const Panel = styled(Row)`
	max-width: 55px;
	margin-top: 13px;
`;

export const PanelItem = styled.a`
	max-width: 18px;
	max-height: 18px;
`;