import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul` 
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	list-style-type: none;
	margin-left: 29px;
	padding: 0;
`;

export const ListItem = styled.li` 
	margin-top: 20px;
`;

export const ListItemLink = styled(Link)` 
	font-family: 'Roboto',
	font-size: 18px;
	font-weight: 500;
	line-height: 21px;
	color: #736464;
`;