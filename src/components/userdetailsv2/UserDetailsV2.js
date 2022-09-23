import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function UserDetailsV2() {
    let {id} = useParams();
    let [user, setUser] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser({...value});
            });


    }, [id]);
    return (
        <div>
            {
                JSON.stringify(user)

            }

        </div>
    );
}
