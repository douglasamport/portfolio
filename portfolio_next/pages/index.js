import axios from 'axios';
import React from 'react';
import Landing from '../components/Landing';
import HomeLatestPosts from '../components/HomeLatestPosts';

function Home({posts, homeHeader}) {

  return (
    <>
      <Landing homeHeader={homeHeader.data.attributes}/>
      <HomeLatestPosts posts={posts.data}/>
    </>
   
  );
}

export async function getStaticProps() {

  const postsRes = await axios.get("http://localhost:1337/api/posts?populate=img")
  const headerRes = await axios.get("http://localhost:1337/api/homepage-header")
  
  
  return {
    props: {
      posts: postsRes.data,
      homeHeader: headerRes.data
    }
  }
}
export default Home;
