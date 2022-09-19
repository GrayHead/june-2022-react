import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../user/User";
import {UserDetails} from "../user-details/User-details";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user,setUser] = useState(null);

    const showUser = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))
    },[])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} showUser={showUser}/>)
            }
            {
                user && <UserDetails key={user.id} user={user}/>
            }
        </div>
    )
}
export {Users};
