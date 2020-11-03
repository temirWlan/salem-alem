import React from 'react';
import styled from 'styled-components';

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

const FriendItem = ({ name, uniqueUrlName, photos, status, followed }) => {
   return (
      <Container>
         <AvatarBG>
            {
               <img src={photos.small ? photos.small : null} alt='avatar' />
            }
         </AvatarBG>
         <Column>
            <Title>
               {name}
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

const Container = styled.div`
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
   width: 50px;
   height: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Title = styled.h5`
   font-family: 'Roboto', sans-serif;
   font-weight: 500;
   font-size: 20px;
   line-height: 120%;
   letter-spacing: 0.05em;
   color: #fff;
`;

const Description = styled.span`
   display: inline-block;
   font-family: 'Roboto', sans-serif;
   font-weight: normal;
   font-size: 14px;
   letter-spacing: 0.05em;
   color: #fff;
`;

const ChatButton = styled.a`
   display: inline-block;
   max-width: 25px;
   max-height: 25px;
`;

export default FriendItem;