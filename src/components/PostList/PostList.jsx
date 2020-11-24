import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { uploadPosts } from '../../state/actions';

import { Container } from './style';
import Post from '../Post';
import Spinner from '../Spinner';
import Error from '../Error';


class PostList extends Component {

	componentDidMount() {
		this.props.uploadPosts();
	}

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

PostList.propTypes = {
	posts: PropTypes.bool, 
	loading: PropTypes.bool.isRequired, 
	error: PropTypes.bool.isRequired
}

const mapStateToProps = ({ post: { posts, loading, error } }) => ({ postList: posts, loading, error });
const mapDispatchToProps = dispatch => ({ uploadPosts });

export default connect(mapStateToProps, mapDispatchToProps)(PostList);