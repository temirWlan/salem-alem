import React from 'react';
import { Navbar, NavItem } from 'reactstrap';
import { NavLink  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { NavList } from './style';



const NavbarBlock = () => {

	const navItems = [
		{label: 'Home', path: '/',id: Math.random()}, 
		{label: 'Timeline', path: '/timeline',id: Math.random()}, 
		{label: 'Account Settings', path: '/account-settings',id: Math.random()}, 
		{label: 'More Pages', path: '/more-pages', id: Math.random()}
	];

	const items = navItems.map(({ label, path, id }) => {
		return (
			<NavItem key={id} >
				<NavLink 
						style={{color: '#000', marginLeft: '40px'}} 
						activeStyle={{fontWeight: 700, textDecoration: 'none'}}
						to={path} 
						key={id}
			>{label}</NavLink>
			</NavItem>
		);
	});


	return (
		<>
			<Navbar>
				<List items={items} />
			</Navbar>
		</>
	)
};

const List = ({ items }) => {
	return (
		<NavList>
			{items}
		</NavList>
	)
}

export default NavbarBlock;