import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import withSidebar from '../HOC/withSidebar';
import { chat, bell } from '../../services/imagePath';

const rowStyle = {
	minWidth: '120px', 
	marginTop: '10px',
	justifyContent: 'flex-start'
};

const descStyle = {
	margin: '0 0 0 5px',
};

const fieldStyle = {
	marginLeft: 'auto'
};


const Profile = ({ avatar, msgCount, notifCount }) => {

	return (
		<>
			<Row>
				<AvatarBG>
					<img src={avatar} alt="avatar" />
				</AvatarBG>
				<Column>
					<Row style={rowStyle}>
						<Icon src={chat} />
						<Description style={descStyle}>
							Messages
						</Description>
						<NumberField style={fieldStyle}>
							<NumberText>
								{msgCount}
							</NumberText>
						</NumberField>
					</Row>
					<Row style={rowStyle}>
						<Icon src={bell} />
						<Description style={descStyle}>
							Notifications
						</Description>
						<NumberField style={fieldStyle}>
							<NumberText>
								{notifCount}
							</NumberText>
						</NumberField>
					</Row>
				</Column>
			</Row>
			<Row style={{marginTop: '44px'}}>
				<Button to="/likes" color="#60FF46">
					Likes
				</Button>
				<Button to="/views">
					Views
				</Button>
			</Row>
		</>
	);
};



const Row = styled.div` 
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Column = styled.div` 
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const AvatarBG = styled.div`
	max-width: 50px;
	max-height: 50px;
	border: 50%;
	background-color: #c4c4c4;
`;

const Icon = styled.img` 
	max-width: 14px;
	max-height: 14px;
`;

const Description = styled.h5`
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: normal;
	line-height: 16px;
	color: #897b7b;
`;

const NumberField = styled.span`
	width: 14px;
	height: 14px;
	display: inline-block;
	border: 1px solid #7b7171;
	position: relative;
	text-align: center;
`;

const NumberText = styled.span`
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

const Button = styled(Link)` 
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

const ProfileSidebar = (props) => withSidebar('Your Page',props)(Profile)
export default ProfileSidebar;

export { Row, Column, AvatarBG };