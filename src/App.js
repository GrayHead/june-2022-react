import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import UserDetails from "./components/userdetails/UserDetails";
import UserDetailsV2 from "./components/userdetailsv2/UserDetailsV2";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postdetails/PostDetails";
import DrillA from "./components/drillA/DrillA";
import DrillB from "./components/drillB/DrillB";

function App() {


    return (<div>

        <ul>
            <li><Link to={'/'}>Home page</Link></li>
            <li><Link to={'/users'}>all users page</Link></li>
            <li><Link to={'/posts'}>all posts page</Link></li>
            <li><Link to={'/drill'}>drill</Link></li>
        </ul>

        <hr/>
        <Routes>
            {/* root path - /        */}
            <Route path={'/'} element={<Home/>}/>
            <Route path={'users'} element={<Users/>}/>
            {/*    users/1 */}
            {/*    users/kasdjguqeyqfye */}
            <Route path={'users/:id'} element={<UserDetails/>}/>
            <Route path={'users/v2/:id'} element={<UserDetailsV2/>}/>


            <Route path={'posts'} element={<Posts/>}>
                {/*/posts/1*/}
                <Route path={':id'} element={<PostDetails/>}/>
            </Route>

            <Route path={'drill'} element={<DrillA/>}>
                <Route path={'drillB'} element={<DrillB/>}/>

            </Route>


        </Routes>

        <hr/>

    </div>);
}

export default App;
