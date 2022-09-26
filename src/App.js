import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {TodosPAge} from "./pages/TodosPAge";
import {Posts} from "./components";

function App() {



    return (<div>

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Posts/>}/>
                </Route>
                <Route path={'todos'} element={<TodosPAge/>}/>
            </Route>
        </Routes>

    </div>);
}

export default App;
