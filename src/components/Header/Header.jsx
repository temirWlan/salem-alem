import React from 'react';
import { Row, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import style from './Header.module.css';
import NavbarBlock from '../Navbar/Navbar';
import logo from '../../images/logo.png';
import { search, home, bell, chat, world } from '../../services/imagePath';


const Header = () => {

	const navIcons = [
		{label: 'Search', imgSrc: search, id: Math.random()},
		{label: 'Home', imgSrc: home, id: Math.random()},
		{label: 'Notifications', imgSrc: bell, id: Math.random()},
		{label: 'Messages', imgSrc: chat, id: Math.random()},
		{label: 'World', imgSrc: world, id: Math.random()}
	];

	const onRotateMenu = event => {
		event.preventDefault();
		
		if (event.target && event.target.tagName === 'A') {
			event.target.classList.toggle(`${style.active}`);
		}
	};


	return (
		<Row style={rowStyle}>
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>
			<NavbarBlock />
			<ListGroup style={listGroup}>
				{
					navIcons.map(({ label, imgSrc, id }) => {
						return (
							<ListGroupItem 
									style={listGroupItem}
									key={id}
							>
								<Link to={label}>
									<img src={imgSrc}/>
								</Link>
							</ListGroupItem>
						)
					})
				}
			</ListGroup>
			<a 
				onClick={onRotateMenu}
				className={style.burger}
				style={burgerPos} 
				href="#" 
			/>
		</Row>
	)
};


// style objects
const listGroup = {
	flexDirection: 'row',
	alignItems: 'center',
	marginLeft: '12px'
};

const listGroupItem = {
	border: 'none', 
	marginLeft: '30px',
	padding: '0'
};

const burgerPos = {
	alignSelf: 'center',
	marginLeft: '70px'
};

const rowStyle = {
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 15px'
};

// burger menu
// const Burger = styled.a`
// 	display: inline-block;
// 	width: 36px;
// 	height: 3px;
// 	background-color: #000;
// 	position: relative;
// 	cursor: pointer;

// 	&:before, &:after {
// 		content: '';
// 		display: inline-block;
// 		width: 36px;
// 		height: 3px;
// 		background-color: #000;
// 		position: absolute;
// 	}

// 	&:before {
// 		transform: translateY(-6px);
// 	}

// 	&:after {
// 		transform: translateY(6px);
// 	}
// `;


export default Header;