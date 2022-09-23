import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function PostDetails() {
    // let {state:post} = useLocation();
    let {id} = useParams();
    let [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPost({...value});
            });

    }, [id]);
    return (
        <div>
            {JSON.stringify(post)}

        </div>
    );
}
