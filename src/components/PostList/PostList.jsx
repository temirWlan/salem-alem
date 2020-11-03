import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { postsRequested, postsLoaded, postsRejected, uploadPosts } from '../../actions';
// import SourceService from './../../services/server';

import Post from '../Post/Post';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';


class PostList extends Component {

	getItems(items) {
			const posts = items.map(({ avatar, fullname, date, time,  preview, description, id }) => {
				return <Post 
					avatar={avatar}
					fullname={fullname}
					date={date}
					time={time}
					preview={preview}
					description={description}
					id={id}
					key={id}
				/>
			});

			return posts;
	}

	render() {
		const { postList, loading, error } = this.props;
		const items = this.getItems(postList);

		const loadingBlock = loading ? <Spinner /> : null;
		const errorBlock = error ? <Error /> : null; 
		const posts = items ? items : null;
		

		return (
			<Container>
				{loadingBlock}
				{errorBlock}
				{posts}
			</Container>
		)
	}
}


const Container = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;


const mapStateToProps = ({ post }) => {
	const { posts, loading, error } = post;

	return {
		postList: posts,
		loading,
		error
	}
};

const mapDispatchToProps = dispatch => ({
	postsRequested, 
	postsLoaded, 
	postsRejected,
	uploadPosts: dispatch(uploadPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);