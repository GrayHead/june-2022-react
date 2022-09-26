import {Link} from "react-router-dom";

const Headers = () => {

    return (
        <div>

            <h3>Menu</h3>
            <div><Link to={'albums'}>Albums</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
            <div><Link to={'todos'}>Todos</Link></div>
        </div>
    )
}
export {Headers};