import {Link} from "react-router-dom";

const User = ({user}) => {

    return (
        <div>
            <div>{user.name} -- {user.email}</div>
            <span><Link to={user.id.toString()}>Single User</Link></span>
        </div>
    )
}
export {User};