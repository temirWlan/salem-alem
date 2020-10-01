import React, { Component } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import { Row, AvatarBG } from '../Profile/Profile';
import { photo, video, camera } from '../../services/imagePath';

// const iconsStyle = { marginRight: '24px' };
const panelStyle = { maxWidth: '172px'};



export default class PostAddBlock extends Component {

	onAddPost() {

	}


	render() {
		return (
			<Block>
				<RowBlock>
					<AvatarBG>
						<img src="" alt="avatar" />
					</AvatarBG>
					<PostForm onSubmit={this.onAddPost}>
						<Container>
							<TextField 
								type="text" 
								placeholder="write something" 
							/>
							<Panel style={panelStyle}>
								<IconLinksContainer>
									<IconLink title="Add image from gallery" href="#">
										<img src={photo} alt="photo" />
									</IconLink>
									<IconLink title="Add video from gallery" href="#">
										<img src={video} alt="video" />
									</IconLink>
									<IconLink title="Take a photo for the post" href="#">
										<img src={camera} alt="camera" />
									</IconLink>
								</IconLinksContainer>
								<Button>Post</Button>
							</Panel>
						</Container>
					</PostForm>
				</RowBlock>
			</Block>
		);
	}
}

const Block = styled.div`
	min-width: 550px;
   position: relative;
	padding: 38px 30px; 
	background-color: #fff;
	box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);
`;


const RowBlock = styled(Row)`
	align-items: flex-start;
`;

const PostForm = styled.form` 
	background-color: #fff;
`;

const Container = styled.div`
	min-width: 390px;
   min-height: 96px;
   border: 1px solid #ccc;
   position: relative;
`;

const TextField = styled.textarea`
   width: 100%;
   height: 20%;
   padding: 13px 12px 0 12px;
   outline: none;
   border: none;
   resize: none;
`; 

const Panel = styled.div`
	display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 14px 10px auto;
`;

const IconLinksContainer = styled.div`
	display: flex;
   justify-content: space-between;
   align-items: center;
   margin-right: 12px;
`;

const IconLink = styled.a`
	margin-right: 12px;
`;

const Button = styled.button`
	padding: 5px 15px;
   background-color: #3dc2ec;
   border: none;
   color: #fff;
`;

export { Block };