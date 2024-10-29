import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate =useNavigate();

    const style = {
        border: '2px solid red',
        margin: '1rem',
        borderRadius: '1rem',
    };

    const handleShowDetail = () =>{
        navigate(`/post/${id}`)
    }


    return (
        <div style={style}>
            <h4>post of id: {id}</h4>
            <h4>post of id: {title}</h4>
            {/* <Link to={`/post/${id}`}> show detail </Link> */}
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;