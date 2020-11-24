import React from 'react';
import { Col } from 'reactstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { NewsPage, FriendsPage, ProfilePage } from '../../pages';
import Header from '../Header';
import InfoSideBar from '../InfoSide';
import ProfileSidebar from '../Profile';
import AdSidebar from '../Ad';

import './App.css';
import { ContainerBlock, Content } from './style';
import styles from './style';




function App() {

   return (
		<div className="app">
			<Router>
				<ContainerBlock>
					<Header />
					<Content style={styles.contentPos}>
						<Col lg='3'>
							<InfoSideBar />
						</Col>
						<Col lg='6' style={styles.colStyle}>
							<Route exact path='/' component={NewsPage} />
							<Route exact path="/friends" component={FriendsPage} /> 
							<Route exact path="/profile" component={ProfilePage} />
						</Col>
						<Col lg='3'>
							<ProfileSidebar />
							<div style={styles.adStyle}>
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