import React from 'react';
import { Row, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import NavbarBlock from '../Navbar/Navbar';

import style from './Header.module.css';
import styles from './style';
import logo from '../../assets/images/logo.png';
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
		<Row style={styles.rowStyle}>
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>
			<NavbarBlock />
			<ListGroup style={styles.listGroup}>
				{
					navIcons.map(({ label, imgSrc, id }) => {
						return (
							<ListGroupItem 
									style={styles.listGroupItem}
									key={id}
							>
								<Link to={label}>
									<img src={imgSrc} alt="link"/>
								</Link>
							</ListGroupItem>
						)
					})
				}
			</ListGroup>
			<a 
				href="#" 
				onClick={onRotateMenu}
				className={style.burger}
				style={styles.burgerPos} 
			/>
		</Row>
	)
};

export default Header;