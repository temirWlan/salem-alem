import React, { useState } from 'react';
import { Container, Col } from 'reactstrap';
import styled from 'styled-components';
import { BrowserRouter as Router} from 'react-router-dom';


import './App.css';
import Header from './components/Header/Header';
import InfoSideBar from './components/InfoSide/InfoSide';
import ProfileSidebar from './components/Profile/Profile';
import AdSidebar from './components/Ad/Ad';
import PostAddBlock from './components/PostAddBlock/PostAddBlock';
import PostList from './components/PostList/PostList';


const ContainerBlock = styled(Container)` 
	max-width: 1170px;
	margin: 0 auto;
`;

const Content = styled.div` 
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 27px 5px;
	background: #f4f2f3;
	border: 1px solid rgba(0, 0, 0, 0.2);
`;

const contentPos = {
	marginTop: '24px'
};

const adStyle = {
	marginTop: '45px'
};


function App() {

   return (
		<div className="app">
			<Router>
				<ContainerBlock>
					<Header />
					<Content style={contentPos}>
						<Col lg='3'>
							<InfoSideBar />
						</Col>
						<Col lg='6'>
							<PostAddBlock />
							<PostList style={{marginTop: '30px'}} />
						</Col>
						<Col lg='3'>
							<ProfileSidebar />
							<div style={adStyle}>
								<AdSidebar />
							</div>
						</Col>
					</Content>
				</ContainerBlock>
			</Router>
		</div>
  );
}

export default App;