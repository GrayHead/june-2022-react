import User from "../user/User";
import {useEffect, useState} from "react";
import {getUser, getUsers} from "../../services/user.api.service";
import {getUsersAxios} from "../../services/user.api.axios.service";


export default function Users() {
    let [users, setUsers] = useState([]); // [[],set()]
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj);
    }


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             setUsers(value);
    //             console.log(value);
    //         });
    // }, []);


    useEffect(() => {
        // getUsers().then(value => setUsers(value));
        getUsersAxios().then(value => setUsers(value.data))
    }, []);


    return (<div>
            <hr/>
            {/*{user &&  <div>{JSON.stringify(user)}</div> }*/}
            {/*{user? <div>asdfyagsd</div>:<div>qwuyeqywteu</div>}*/}
            <h3>{user?.username}</h3>
            <hr/>

            {users
                .map((user, index) => (<User
                    item={user}
                    key={index}
                    lift={lift}/>))}


        </div>


    );
}
