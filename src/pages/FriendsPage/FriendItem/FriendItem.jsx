import React from 'react';
import PropTypes from 'prop-types';

import { Container, Column, AvatarBG, Title, Description, ChatButton } from './style';
import { chat } from '../../../services/imagePath';

/*
   "name": "lovrbiker",
   "id": 12305,
   "uniqueUrlName": null,
   "photos": {
      "small": null,
      "large": null
   },
   "status": null,
   "followed": false
*/

const FriendItem = (props) => {
   const { name, uniqueUrlName, photos, status } = props;
   const userName = `${name[0].toUpperCase()}${name.slice(1)}`;

   const showUserPage = e => {
      
   };

   return (
      <Container 
         to={userName}
         onClick={showUserPage}
      >
         <AvatarBG>
            {
               photos.small ? <img src={photos.small} alt='avatar' /> : null
            }
         </AvatarBG>
         <Column>
            <Title>
               {userName}
               {uniqueUrlName}
            </Title>
            <Description>
               {status}
            </Description>
         </Column>
         <ChatButton>
            {
               <img src={chat} alt='chat' />
            }
         </ChatButton>
      </Container>
   );
};

FriendItem.defaultProps = {
   name: 'Unknown',
   uniqueUrlName: null,
   photos: {},
   status: 'something',
   followed: false
};

FriendItem.propTypes = {
   name: PropTypes.string.isRequired,
   photos: PropTypes.object,
   status: PropTypes.string,
   followed: PropTypes.bool.isRequired 
}

export default FriendItem;