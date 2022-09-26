import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

const todosService = {
    getAll: () => axiosService.get(urls.todos)
}

export {
    todosService
}