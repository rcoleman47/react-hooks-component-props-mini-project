import React from 'react';
import Article from './Article';

function ArticleList(props) {
  console.log(props.posts)
  return (
   <main>
     {props.posts.map(blog=>{
       return(
         <Article key={blog.id} {...blog}/>
       )
     })}
   </main>
  )
}

export default ArticleList