import React from 'react';
import styled from 'styled-components';

import FriendsList from './FriendsList';

const FriendsPage = () => {
   return (
      <div>
         <Row>
            <SearchForm style={styles.form}>
               <IconBlock></IconBlock>
               <SearchInput />
               <ClearButton href="#"/>
               {/* <FriendsList /> */}
            </SearchForm>
         </Row>
      </div>
   )
};

const styles = {
   form: {
      'width': '100%'
   }
};

const Row = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const SearchForm = styled.form`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   min-height: 40px;
   position: relative;
   z-index: 100;
`;

const SearchInput = styled.input`
   width: 100%;
   width: 100%;
   height: 100%;
   padding: 5px 10px;
   position: absolute;
   z-index: 99;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 20px;
   color: rgba(0, 0, 0, 0.6);
`;

const IconBlock = styled.div`
   width: 30px;
   height: 30px;
   position: absolute;
`;

const ClearButton = styled.a`
   display: inline-block;
   width: 1px;
   height: 5px;
   position: relative;
   top: 50%;
   right: 5px;
   z-index: 100;

   &:before, &:after {
      content: '';
      display: inline-block;
      width: 2px;
      height: 15px;
      position: absolute;
      background-color: #000;
   }

   &:before {
      transform: rotate(45deg);
   }

   &:after {
      transform: rotate(-45deg);
   }
`;

export default FriendsPage;