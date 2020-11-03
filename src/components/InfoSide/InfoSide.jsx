import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import withSidebar from '../HOC/withSidebar';


const InfoSide = () => {

	const itemList = [
			{label: 'News Feed', path: '/', id: (Math.random() ** 2)},
			{label: 'Inbox', path: '/inbox', id: (Math.random() ** 2)},
			{label: 'My Pages', path: '/my-pages', id: (Math.random() ** 2)},
			{label: 'Friends', path: '/friends', id: (Math.random() ** 2)},
			{label: 'Images', path: '/images', id: (Math.random() ** 2)},
			{label: 'Videos', path: '/videos', id: (Math.random() ** 2)},
			{label: 'Messages', path: '/messages', id: (Math.random() ** 2)},
			{label: 'Notifications', path: '/notifications', id: (Math.random() ** 2)},
			{label: 'People Nearby', path: '/people-nearby', id: (Math.random() ** 2)},
			{label: 'Insights', path: '/insights', id: (Math.random() ** 2)},
			{label: 'Log out', path: '/log-out', id: (Math.random() ** 2)}
	];
	
	const linkList = itemList.map(({ label, path, id }) => {
		return ( 
			<ListItem key={id}>
				<ListItemLink 
						to={path}
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