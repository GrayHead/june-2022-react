import {Outlet} from "react-router-dom";

import {Headers} from "../components";

const MainLayout = () => {

    return (
        <div>
            <Headers/>
            <h3>Content</h3>
            <Outlet/>
        </div>
    )
}
export {MainLayout};