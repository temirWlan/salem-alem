import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addedPost } from '../../actions';
import SourceService from '../../services/server';


import { Row, AvatarBG } from '../Profile/Profile';
import { photo, video, camera } from '../../services/imagePath';

// const iconsStyle = { marginRight: '24px' };
const panelStyle = { maxWidth: '172px'};



class PostAddBlock extends Component {

	constructor(props) {
		super(props);
		this.text = React.createRef();
		this.setZero = this.setZero.bind(this);
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.getCurrentTime = this.getCurrentTime.bind(this);
		this.onAddPost = this.onAddPost.bind(this);
	}

	componentDidMount() {
		this.date = new Date();

		new SourceService().getProfileInfo()
			.then(res => this.profileInfo = res)
			.catch(() => this.profileInfo);

	}

	setZero(num) {
		return num < 10 ? `0${num}` : num;
	}

	getCurrentDate() {
		this.day = this.setZero(this.date.getDate());
		this.month = this.setZero(this.date.getMonth() + 1);
		this.year = this.setZero(this.date.getFullYear());

		return `${this.day}.${this.month}.${this.year}`
	}

	getCurrentTime() {
		this.hours = this.setZero(this.date.getHours());
		this.minutes = this.setZero(this.date.getMinutes());
		this.seconds = this.setZero(this.date.getSeconds());


		return `${this.hours}:${this.minutes}:${this.seconds}`;
	}

	onAddPost(e) {
		e.preventDefault();
		const { posts, addedPost } = this.props;
		const { avatar, fullname } = this.profileInfo;


		this.post = {
			id: `${Math.random()}`,
			avatar: `${avatar ? avatar : null}`,
			fullname: `${fullname ? fullname : null}`,
			date: this.getCurrentDate(),
			time: this.getCurrentTime(),
			preview: '',
			description: this.text.current.value,
			likes: 0,
			comments: 0
		};

		addedPost(this.post);
		this.text.current.value = '';
	}


	render() {
		const { avatar } = this.props;

		return (
			<Block>
				<RowBlock>
					<AvatarBG>
						{
							avatar ? <img src={avatar} alt="avatar" /> : null
						}
					</AvatarBG>
					<PostForm onSubmit={this.onAddPost}>
						<Container>
							<TextField 
								type="text" 
								placeholder="write something" 
								ref={this.text}
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
	max-width: 550px;
	margin: 0 auto;
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
   outline: none;
   color: #fff;

   &:focus {
   	border: 1px solid #aeaeae;
   }
`;

export { Block };

const mapStateToProps = ({ post }) => {
	const { posts } = post;

	return {
		posts
	}
};

const mapDispatchToProps = { 
	addedPost 
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAddBlock);