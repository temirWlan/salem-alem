import styled from 'styled-components';
import { Container } from 'reactstrap';

export const ContainerBlock = styled(Container)` 
	max-width: 1170px;
	margin: 0 auto;
`;

export const Content = styled.div` 
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 27px 0;
	background: #f4f2f3;
	border: 1px solid rgba(0, 0, 0, 0.2);
`;

const styles = {
	colStyle: {
		padding: '0'
	},
	contentPos: {
		marginTop: '24px'
	},
	adStyle: {
		marginTop: '45px'
	},
	postListStyle: { marginTop: '30px' }
}

export default styles;