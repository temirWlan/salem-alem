import React, { useState } from 'react';
import { Button } from 'reactstrap';

import { CommentBlock, CommentForm, CommentText } from './style';

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


export default Comment;