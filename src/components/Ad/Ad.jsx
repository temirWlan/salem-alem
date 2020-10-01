import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import withSidebar from '../HOC/withSidebar';



const Ad = () => {
	return(
		<Block>
			lkjsdalfj
		</Block>
	);
};

const Block = styled.div`
	min-height: 494px;
	margin-top: 45px;
`;

Ad.propTypes = {
	description: PropTypes.string.isRequired
};

Ad.defaultProps = {
	description: 'Тут должна быть реклама'
}

const AdSidebar = (props) => withSidebar('Ad', props)(Ad);
export default AdSidebar;
