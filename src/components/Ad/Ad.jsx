import React from 'react';
import PropTypes from 'prop-types';

import { withSidebar } from '../../hoc';
import { Block } from './style';



const Ad = () => {
	return(
		<Block>
			lkjsdalfj
		</Block>
	);
};

Ad.propTypes = {
	description: PropTypes.string.isRequired
};

Ad.defaultProps = {
	description: 'Тут должна быть реклама'
}

const AdSidebar = props => withSidebar('Ad', props)(Ad);
export default AdSidebar;
