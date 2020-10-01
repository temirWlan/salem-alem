import React from 'react';
import styled from 'styled-components';



const withSidebar = (title, props) => {
	return function (WrappedComponent) {
		return(
			<SideBar>
				<Title>
					{title}
				</Title>
				<WrappedContainer>
					<WrappedComponent {...props} />
				</WrappedContainer>
			</SideBar>
		)
	}
}

const SideBar = styled.div` 
	min-width: 250px;
	padding: 24px 32px 35px 18px;
	background: #fff;
	box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1)
`;

const WrappedContainer = styled.div`
	margin-top: 34px;
`;

const Title = styled.h3` 
	font-family: 'Roboto', sans-serif;
	font-size: 18px;
	font-weight: 500;
	text-transform: uppercase;
	line-height: 21px;
	position: relative;

	&:after {
		content: '';
		display: inline-block;
		width: 52px;
		height: 3px;
		background-color: #1d94d8;
		position: absolute;
		top: 24px;
		bottom: 0;
		left: 0;
	}
`;

export default withSidebar;