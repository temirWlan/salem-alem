import React, { useState } from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Row, Column, AvatarBG } from '../Profile/Profile';
import { Block } from '../PostAddBlock/PostAddBlock';
import { connect } from 'react-redux';

import regularLike from '../../images/post-status-icons/regular-like.svg';
import solidLike from '../../images/post-status-icons/solid-like.svg';
import comment from '../../images/post-status-icons/speech-bubble.svg';



const Post = ({ avatar, fullname, date, time, preview, description, id }) => {
	const [likeState, updateLikeState] = useState({
		liked: false
	});

	const like = React.createRef();

	const onLikedPost = e => {
		e.preventDefault();
		updateLikeState({ liked: !likeState.liked })
		like.current.src = `${likeState.liked ? solidLike : regularLike}`;
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
					<img 
						src={regularLike} 
						alt="like"
						ref={like}
					/>
				</PanelItem>
				<PanelItem href="#">
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


const PostBlock = styled(Block)`
	max-width: 550px;
	width: 100%;
	margin: 0 auto;
	padding: 27px 25px 19px 25px;

	&:not(:first-child) {
		margin-top: 40px;
	}
`;

const Title = styled.h3`
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #000;
	margin-bottom: 0;
`;

const PostDateDescription = styled.span`
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	color: #847777;
`; 

const PreviewBG = styled.div`
	max-width: 500px;
	max-height: 300px;
`;

const Text = styled.p`
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 14px;
	line-height: 150%;
	color: #000;
`;

const Panel = styled(Row)`
	max-width: 55px;
	margin-top: 13px;
`;

const PanelItem = styled.a`
	max-width: 18px;
	max-height: 18px;
`;

// const mapStateToProps

export default Post;