import {useEffect, useState} from "react";

import {userService} from "../../services";
import {UserForm} from "../userForm/UserForm";
import User from "../user/User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            <div><UserForm setUsers={setUsers}/></div>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    )
}
export {Users};
