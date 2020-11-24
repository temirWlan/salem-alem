import styled from 'styled-components';
import { ListGroup } from 'reactstrap';

export const NavList = styled(ListGroup)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	list-style-type: none;

	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	font-weight: 500;
	line-height: 18px;
	color: #000;
`;