import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Row = styled.div` 
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Column = styled.div` 
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Icon = styled.img` 
	max-width: 14px;
	max-height: 14px;
`;

export const Description = styled.h5`
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: normal;
	line-height: 16px;
	color: #897b7b;
`;

export const NumberField = styled.span`
	width: 14px;
	height: 14px;
	display: inline-block;
	border: 1px solid #7b7171;
	position: relative;
	text-align: center;
`;

export const NumberText = styled.span`
	font-family: 'Roboto';
	font-size: 12px;
	font-weight: normal;
	line-height: 14px;
	color: #000;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const Button = styled(Link)` 
	min-width: 100px;
	min-height: 24px;
	margin-left: auto;
	padding: 4px 30px;
	background-color: ${props => props.color || '#919290'};
	cursor: pointer;

	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 500;
	line-height: 16px;
	color: #fff;
	text-align: center;

	&:hover {
		color: #fff;
		text-decoration: none;
	}
`;

const styles = {
	rowStyle: {
		minWidth: '120px', 
		marginTop: '10px',
		justifyContent: 'flex-start'
	},
	descStyle: {
		margin: '0 0 0 5px',
	},
	fieldStyle: {
		marginLeft: 'auto'
	}
};

export default styles;