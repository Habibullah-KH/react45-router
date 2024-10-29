import { Link } from 'react-router-dom';

const User = ({user}) => {

const {id, name, email, phone} = user;
const userStyle = {
    border: '2px solid yellow',
    padding: '10px',
    borderRadius: '20px',
}
    return (
        <div style={userStyle}>
            <h2>email: {email}</h2>
            <h2>phone: {phone}</h2>
            <h2>name: {name}</h2>
            <h2>id: {id}</h2>
            <Link to={`/user/${id}`}>Show detail</Link>
        </div>
    );
};

export default User;