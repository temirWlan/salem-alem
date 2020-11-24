import React from 'react';

import FriendsList from './FriendsList';
import { Column, SearchForm, SearchInput, IconBlock, ClearButton } from './style';
import styles from './style';

const FriendsPage = () => {
   const searchInput = React.createRef();
   const clearBtn = React.createRef();

   const clearField = e => {
      e.preventDefault();
      searchInput.current.value = '';
      clearBtn.current.style.display = 'none';
   }

   const showClearBtn = e => {
      if (e.target.value) {
         clearBtn.current.style.display = 'inline-block';
      } else {
         clearBtn.current.style.display = 'none';
      }
   };

   return (
      <Column>
         <SearchForm style={styles.form}>
            <IconBlock />
            <SearchInput 
               ref={searchInput}
               onInput={showClearBtn}
            />
            <ClearButton 
               href="#"
               style={styles.button}
               onClick={clearField} 
               ref={clearBtn}
            />
         </SearchForm>
         <FriendsList style={styles.friendsList}/>
      </Column>
   )
};


export default FriendsPage;