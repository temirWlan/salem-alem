import styled from 'styled-components';

export const CommentBlock = styled.div`
   margin: 0 auto;	
   width: 300px;
   min-height: 260px;
   padding: 30px 20px;
   background-color: #fff;
   border: 1px solid #777;
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 100;
`;

export const CommentForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CommentText = styled.textarea`
	width: 100%;
	min-heght: 100%;
	padding: 10px;
`;
