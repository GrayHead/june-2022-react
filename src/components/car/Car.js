import {useDispatch} from "react-redux";

import css from './Car.module.css'
import {carActions} from "../../redux";

const Car = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();
    return (
        <div className={css.wrap}>
            <div>ID:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=> dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={()=> dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>
    )
}

export {Car};