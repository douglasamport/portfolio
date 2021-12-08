import axios from 'axios';
import React from 'react';
import MarkdownIt from 'markdown-it';

function PostPage({post}) {
    let postAtt = post.data.attributes
    let md = new MarkdownIt();
    let htmlContent = md.render(postAtt.content);

    return (
        <article>
            <header>
                <h1>{postAtt.title}</h1>    
            </header>
            <section dangerouslySetInnerHTML={{__html: htmlContent}}>
                
            </section>
        </article>
    );
}

export default PostPage;

export async function getStaticProps({params}) {
    const postRes = await axios.get(`http://localhost:1337/api/posts/${params.id}`)
    return {
        props: {
            post: postRes.data
        }
    }
}

export async function getStaticPaths() {
    const postsRes = await axios.get("http://localhost:1337/api/posts")
    let thing = postsRes.data

    const paths = thing.data.map((post) => { 

        return {params: {id: post.id.toString()}}
    });
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
}