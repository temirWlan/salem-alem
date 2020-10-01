import React, { Component } from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Row, Column, AvatarBG } from '../Profile/Profile';
import { Block } from '../PostAddBlock/PostAddBlock';

import like from '../../images/post-status-icons/heart.svg';
import comment from '../../images/post-status-icons/speech-bubble.svg';



const Post = () => {

	return (
		<div>post</div>
		/*<PostBlock key={Math.random()}>
			<Row style={{marginLeft: '13px'}}>
				<AvatarBG>
					<img src={avatarSrc} alt="avatar" />
				</AvatarBG>
				<Col>
					<Link 
						style={{textDecoration: 'none'}}
						to={fullname.replace(' ', '-').toLowerCase()}
					>
						<Title>
							{fullname}
						</Title>
					</Link>
					<PostDateDescription>
						Published {date}
					</PostDateDescription>
				</Col>
			</Row>
			<Row style={{marginTop: '22px'}}>
				<PreviewBG>
					<img src={previewSrc} alt="preview" />
				</PreviewBG>
			</Row>
			<Panel>
				<PanelItem href="#">
					<img src={like} alt="like" />
				</PanelItem>
				<PanelItem href="#">
					<img src={comment} alt="comment" />
				</PanelItem>
			</Panel>
			<Row style={{marginTop: '19px'}}>
				<Text>
					{text}
				</Text>
			</Row>
		</PostBlock>*/
	);
}


const PostBlock = styled(Block)`
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

export default Post;