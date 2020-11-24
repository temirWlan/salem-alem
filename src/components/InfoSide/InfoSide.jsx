import React from 'react';

import { withSidebar } from '../../hoc';

import { List, ListItem, ListItemLink } from './style';

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


const InfoSideBar = (props) => withSidebar('shortcuts', props)(InfoSide);
export default InfoSideBar;