import {Link, Outlet} from "react-router-dom";

export default function DrillA() {
    const drillFunction = (data) => {
        console.log(data);
    }

    return (
        <div>
            this is drillA
            <Link to={'drillB'} state={{fn: drillFunction}}>drillB</Link>
            <Outlet/>

        </div>
    );
}
