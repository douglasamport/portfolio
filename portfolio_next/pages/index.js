import axios from 'axios';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts';

function Home({posts, homeHeader}) {
  console.log("testfor posts data", posts.data[0].attributes.title)
  console.log("testfor header data", homeHeader.data.attributes.header)
  return (
    <>
      <HomeHeader homeHeader={homeHeader.data.attributes}/>
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
