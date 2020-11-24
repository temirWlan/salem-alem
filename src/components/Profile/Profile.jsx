import React from 'react';
import PropTypes from 'prop-types';

import { withSidebar } from '../../hoc';

import { chat, bell } from '../../services/imagePath';
import { AvatarBG } from '../../shared/Blocks';
import { Row, Column, Icon, Description, NumberField, NumberText, Button } from './style';
import styles from './style';



const Profile = ({ avatar, msgCount, notifCount }) => {

	return (
		<>
			<Row>
				<AvatarBG>
					{
						avatar ? <img src={avatar} alt="avatar" /> : null
					}
				</AvatarBG>
				<Column>
					<Row style={styles.rowStyle}>
						<Icon src={chat} />
						<Description style={styles.descStyle}>
							Messages
						</Description>
						<NumberField style={styles.fieldStyle}>
							<NumberText>
								{msgCount}
							</NumberText>
						</NumberField>
					</Row>
					<Row style={styles.rowStyle}>
						<Icon src={bell} />
						<Description style={styles.descStyle}>
							Notifications
						</Description>
						<NumberField style={styles.fieldStyle}>
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

Profile.propTypes = {
	avatar: PropTypes.string, 
	msgCount: PropTypes.number, 
	notifCount: PropTypes.number
};



const ProfileSidebar = (props) => withSidebar('Your Page',props)(Profile)
export default ProfileSidebar;

export { Row, Column, AvatarBG };