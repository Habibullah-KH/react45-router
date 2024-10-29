import { useLoaderData } from "react-router-dom";
import User from "../user/user";
import './Users.css'

const Users = () => {

        const users = useLoaderData();


    return (
        <div className="users">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;