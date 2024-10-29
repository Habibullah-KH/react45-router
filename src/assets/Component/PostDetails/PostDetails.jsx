import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const {id, title, body} = post;

    console.log(postId);

    const navigate = useNavigate();
    const handleGoBack = () => { 
        navigate(-1);
    }
    return (
        <div>
            <h3>Post details about: </h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>go back</button>
        </div>
    );
};

export default PostDetails;