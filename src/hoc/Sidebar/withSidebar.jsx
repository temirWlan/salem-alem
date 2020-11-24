import React from 'react';

import { SideBar, WrappedContainer, Title } from './style';


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


export default withSidebar;