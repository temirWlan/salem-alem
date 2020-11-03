import React from 'react';
import FriendItem from './FriendItem';

const FriendsList = () => {
   const getFriends = async (url) => {
      const res = await fetch(url);

      if (!res.ok) throw new Error();

      return res.json();
   };

   const usersUrl = `https://social-network.samuraijs.com/api/1.0/users`;

   return (
      getFriends(usersUrl)
         .then(res => console.log(res))
   );
};

export default FriendsList;