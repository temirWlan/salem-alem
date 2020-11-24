import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { uploadFriends } from '../../../state/actions';

import FriendItem from '../FriendItem';
import Error from '../../../components/Error';
import Spinner from '../../../components/Spinner';

import styles from './style'


const FriendsList = (props) => {

   useEffect(() => {
      props.uploadFriends();
   }, []);

   return (
      <div style={styles.friendsList}>
         {props.loading ? <Spinner /> : null}
         {props.error ? <Error /> : null}
         {
            props.friends 
               ? props.friends.map(item => <FriendItem key={item.id} {...item} />)
               : null
         }
      </div>
   );
};

FriendsList.propTypes = {
   loading: PropTypes.bool.isRequired, 
   friends: PropTypes.array, 
   error: PropTypes.bool.isRequired
}

const mapStateToProps = ({friends: { loading, friends, error }}) => ({ loading, friends, error });
const mapDispatchToProps = (dispatch) => ({ uploadFriends });

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);