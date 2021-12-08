import React, { useEffect, useState } from 'react';
import PostPreview from './PostPreview';

function AllPosts({ posts }) {
    
    function renderPostDisplay() {
        return posts.map((post) => {
            return <PostPreview post={post} key={post.id}/>
        })
    }

    return (
        <div>
            <h2>Super list of all posts</h2>
            {renderPostDisplay()}
        </div>
    );
}

export default AllPosts;