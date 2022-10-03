import {useReducer, useRef} from "react";

import './App.css';

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {

        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};

        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)};

        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};

        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};
        default:
            console.error('');
            return state;
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const catInput = useRef();
    const dogInput = useRef();

    const createCat = () => {
        dispatch({type: 'addCat', payload: catInput.current.value});
        catInput.current.value = '';

    }

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogInput.current.value});
        dogInput.current.value = '';

    }

    return (
        <div className={'main'}>
           <div className={'cats'}>
               <div>
                   <label>Cats name: <input type="text" ref={catInput}/> </label>
                   <button onClick={createCat}>Save cat</button>
               </div>
               {
                   state.cats.map(cat => (<div key={cat.id}>
                       {cat.name}
                       <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>Delete cat</button>
                   </div>))
               }
           </div>

            <div className={'dogs'}>
                <div>
                    <label>Dogs name: <input type="text" ref={dogInput}/> </label>
                    <button onClick={createDog}>Save dog</button>
                </div>
                {
                    state.dogs.map(dog => (<div key={dog.id}>
                        {dog.name}
                        <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>Delete dog</button>
                    </div>))
                }
            </div>
        </div>
    );
}
export default App;
