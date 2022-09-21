export default function User({user}) {


    return (<div>
        <h2>{user.id} - {user.name} {user.surname} </h2>
        <p>{user.email}</p>
    </div>);
}
