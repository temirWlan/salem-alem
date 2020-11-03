import React, { useState } from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Comment = () => {
   const { comments, addComment } = useState([]);
   const comment = React.createRef();

   const onAddComment = e => {
      e.preventDefault();

      addComment([...comments, { 
         commentator: '', 
         commentText: comment.current.value 
      }]);
   };

   return (
      <CommentBlock>
         <CommentForm onSubmit={onAddComment}>
            <CommentText ref={comment} />
            <Button color='primary'>
               Add
            </Button>
         </CommentForm>
      </CommentBlock>
   )
};

const CommentBlock = styled.div`
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

const CommentForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CommentText = styled.textarea`
	width: 100%;
	min-heght: 100%;
	padding: 10px;
`;

export default Comment;