import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {Post} from "../post/Post";

const Posts = () => {

    const {postId} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getAll(postId).then(({data}) => setPost(data))
    },[postId])

    return (
        <div>
            {post && (<Post post={post}/>)}
        </div>
    )
}
export {Posts};