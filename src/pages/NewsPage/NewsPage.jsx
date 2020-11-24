import React from 'react';

import PostAddBlock from '../../components/PostAddBlock/PostAddBlock';
import PostList from '../../components/PostList/PostList';


const NewsPage = () => {
   return (
      <>
         <PostAddBlock />
		   <PostList/>
      </>
   )
};

export default NewsPage;