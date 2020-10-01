import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import withSidebar from '../HOC/withSidebar';


const InfoSide = () => {

	const itemList = [
			{label: 'News Feed', id: (Math.random() ** 2)},
			{label: 'Inbox', id: (Math.random() ** 2)},
			{label: 'My Pages', id: (Math.random() ** 2)},
			{label: 'Friends', id: (Math.random() ** 2)},
			{label: 'Images', id: (Math.random() ** 2)},
			{label: 'Videos', id: (Math.random() ** 2)},
			{label: 'Messages', id: (Math.random() ** 2)},
			{label: 'Notifications', id: (Math.random() ** 2)},
			{label: 'People Nearby', id: (Math.random() ** 2)},
			{label: 'Insights', id: (Math.random() ** 2)},
			{label: 'Log out', id: (Math.random() ** 2)}
	];
	
	const linkList = itemList.map(({ label, id }) => {
		return ( 
			<ListItem key={id}>
				<ListItemLink 
						to={`/${label.replace(' ', '-').toLowerCase()}`}
				>
					{label}
				</ListItemLink>
			</ListItem>
		);
	});

	return <List>{linkList}</List>;
};


const List = styled.ul` 
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	list-style-type: none;
	margin-left: 29px;
	padding: 0;
`;

const ListItem = styled.li` 
	margin-top: 20px;
`;

const ListItemLink = styled(Link)` 
	font-family: 'Roboto',
	font-size: 18px;
	font-weight: 500;
	line-height: 21px;
	color: #736464;
`;


const InfoSideBar = (props) => withSidebar('shortcuts', props)(InfoSide);
export default InfoSideBar;