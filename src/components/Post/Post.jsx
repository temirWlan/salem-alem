import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { AvatarBG } from '../../shared/Blocks';
import { Row } from '../Profile/style';
import Like from '../Like';
import Comment from '../Comment';

import { PostBlock, Title, PostDateDescription, PreviewBG, Text, Panel, PanelItem } from './style';
import comment from '../../assets/images/post-status-icons/speech-bubble.svg';



const Post = ({ avatar, fullname, date, time, preview, description }) => {
	const [likeState, updateLikeState] = useState({
		liked: false
	});

	useEffect(() => {
		
	}, []);

	const like = React.createRef();

	const onLikedPost = e => {
		e.preventDefault();
		updateLikeState({ liked: !likeState.liked })

		like.current.className += ' active';
	};

	const toggleCommentBlock = e => {
		e.preventDefault();
		return <Comment />
	};

	return (
		<PostBlock key={Math.random()}>
			<Row style={{marginLeft: '13px'}}>
				<AvatarBG>
					{
						avatar ? <img src={avatar} alt="avatar" /> : null
					}
				</AvatarBG>
				<Col>
					<Link 
						style={{textDecoration: 'none'}}
						to={
								fullname ? fullname.replace(' ', '-').toLowerCase() : '/'
							}
					>
						<Title>
							{
								fullname ? fullname : 'no name'
							}
						</Title>
					</Link>
					<PostDateDescription>
						Published {date ? date : '00.00.00'} at {time ? time : '00:00:00'}
					</PostDateDescription>
				</Col>
			</Row>
			<Row style={{marginTop: '22px'}}>
				<PreviewBG>
					{
						preview ? <img src={preview} alt="preview" /> : null
					}
				</PreviewBG>
			</Row>
			<Panel>
				<PanelItem 
					href="#" 
					onClick={onLikedPost}
				>
					<Like refName={like} />
				</PanelItem>
				<PanelItem 
					href="#"
					onClick={toggleCommentBlock}
				>
					<img src={comment} alt="comment" />
				</PanelItem>
			</Panel>
			<Row style={{marginTop: '19px'}}>
				<Text>
					{
						description ? description : 'post text'
					}
				</Text>
			</Row>
		</PostBlock>
	);
}

Post.propTypes = {
	avatar: PropTypes.string, 
	fullname: PropTypes.string, 
	date: PropTypes.string, 
	time: PropTypes.string, 
	preview: PropTypes.string, 
	description: PropTypes.string, 
}

export default Post;