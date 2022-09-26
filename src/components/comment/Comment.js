import {Link} from "react-router-dom";

const Comment = ({comment}) => {

    return (
        <div>
            {comment.id} -- {comment.email}
            <hr/>
            <span><Link to={comment.postId.toString()}>Get post</Link></span>
        </div>
    )
}
export {Comment};