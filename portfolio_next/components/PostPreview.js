import React from 'react';
import Link from "next/link"

function PostPreview({post}) {
    let url = post.attributes.img.data[0].attributes.url
    let prefix = 'http://localhost:1337'
    return (
        <Link href={`/posts/${post.id}`}>
            <div className="postPreview">
                <h3>{post.attributes.title}</h3>
                <img src={`${prefix.concat(url)}`}></img>
                <p>{post.attributes.description}</p>
                
            </div>
        </Link>
    );
}

export default PostPreview;