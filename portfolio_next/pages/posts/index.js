import axios from 'axios';

import React from 'react';
import AllPosts from '../../components/AllPosts'

function Posts({posts}) {
    return (
        <div>
            <AllPosts posts={posts.data}/>
        </div>
    );
}

export default Posts;


export async function getStaticProps() {

    const postsRes = await axios.get("http://localhost:1337/api/posts")
    
    return {
      props: {
        posts: postsRes.data
      }
    }
  }