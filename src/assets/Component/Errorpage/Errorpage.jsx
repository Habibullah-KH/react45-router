import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>opps!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>page not found</h3>
                    <p>Go back wher you from</p>
                    <Link to = "/"><button>home</button></Link>
                    </div>
            }
        </div>
    );
};

export default Errorpage;