import styled from 'styled-components';
import { Row } from  '../Profile/style';

export const RowBlock = styled(Row)`
	align-items: flex-start;
`;

export const PostForm = styled.form` 
	background-color: #fff;
`;

export const Container = styled.div`
	min-width: 390px;
   min-height: 96px;
   border: 1px solid #ccc;
   position: relative;
`;

export const TextField = styled.textarea`
   width: 100%;
   height: 20%;
   padding: 13px 12px 0 12px;
   outline: none;
   border: none;
   resize: none;
`; 

export const Panel = styled.div`
	display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 14px 10px auto;
`;

export const IconLinksContainer = styled.div`
	display: flex;
   justify-content: space-between;
   align-items: center;
   margin-right: 12px;
`;

export const IconLink = styled.a`
	margin-right: 12px;
`;

export const Button = styled.button`
	padding: 5px 15px;
   background-color: #3dc2ec;
   border: none;
   outline: none;
   color: #fff;

   &:focus {
   	border: 1px solid #aeaeae;
   }
`;

export const panelStyle = { maxWidth: '172px'};