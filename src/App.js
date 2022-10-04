import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {LOAD_COMMENTS, loadCommnets} from "./index";

function App() {

    let state = useSelector(state => state.userReducer);
    console.log(state);
    let dispatch = useDispatch();


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch(loadCommnets(value));
            });

    }, []);

    return (<div>

    </div>);
}

export default App;
