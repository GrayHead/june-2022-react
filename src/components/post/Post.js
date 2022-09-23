import {Link, useNavigate} from "react-router-dom";

export default function Post({post}) {
    let navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                // /posts/:id
                navigate(post.id.toString(), {state: {...post}});
            }}>{post.title}</button>
        </div>
    );
}
