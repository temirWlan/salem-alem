import React, { useState } from 'react';
import { Navbar, NavItem, ListGroup } from 'reactstrap';
import { NavLink  } from 'react-router-dom';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';



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

const NavList = styled(ListGroup)`
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

export default NavbarBlock;