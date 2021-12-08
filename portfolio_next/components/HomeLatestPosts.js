import React, { useEffect, useState } from 'react';
import PostPreview from './PostPreview.js';


function HomeLatestPosts({posts}) {
    const [latestPosts, setLatestPosts] = useState([]);
    console.log(posts)
    useEffect(() => {
        setLatestPosts(posts.slice(0, 5));
}, [posts]); 

    function renderPostPreview() {
        return latestPosts.map((post) => {
            return <PostPreview post={post} key={post.id}/>
        })
    }


    return (
        <div className="container">
            <h2>Latest posts</h2>
            {renderPostPreview()}
        </div>
    );
}

export default HomeLatestPosts;