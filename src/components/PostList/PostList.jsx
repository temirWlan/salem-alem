import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { postLoading, addPost, postLoadingError } from '../../actions';
import SourceService from './../../services/server';

import Post from '../Post/Post';


export default class PostList extends Component {
	componentDidMount() {
		postLoading();

		const posts = new SourceService();

		posts.getPosts()
			.then(res => addPost(res))
			.catch(err => postLoadingError());
	}

	render() {
		return (
			<Container>
				<Post />
			</Container>
		)
	}
}


const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;