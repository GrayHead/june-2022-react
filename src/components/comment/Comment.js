const Comment = ({comment}) => {

    return (
        <div>
            {comment.id} -- {comment.name}
        </div>
    )
}
export {Comment};