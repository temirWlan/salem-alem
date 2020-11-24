import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addedPost } from '../../state/actions';
import SourceService from '../../services/server';

import { set } from '../../services/storage';
import { AvatarBG } from '../../shared/Blocks'
import { photo, video, camera } from '../../services/imagePath';

import { RowBlock, PostForm, Container, TextField, Panel, IconLinksContainer, IconLink, Button, panelStyle } from './style';
import { Block } from '../../shared/Blocks';

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
		const { addedPost } = this.props;
		const { avatar, fullname } = this.profileInfo;


		this.post = {
			id: `${Math.random()}`,
			avatar,
			fullname: `${fullname ? fullname : null}`,
			date: this.getCurrentDate(),
			time: this.getCurrentTime(),
			preview: '',
			description: this.text.current.value,
			likes: 0,
			comments: 0
		};

		addedPost(this.post);
		set('posts', this.post);
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


const mapStateToProps = ({ post: { posts } }) => ({ posts });
const mapDispatchToProps = ({ addedPost });

export default connect(mapStateToProps, mapDispatchToProps)(PostAddBlock);