const User = ({user,getUserId}) => {

    return (
        <div>
            <h3>{user.id} -- {user.name}</h3>
            <button onClick={() => getUserId(user.id)}>Click me</button>
        </div>
    )
}
export {User};