import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";


const Posts = () => {
    const posts = useLoaderData();
    
    return (
        <div>
            <h1>This is post {posts.length}</h1>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};
 
export default Posts;