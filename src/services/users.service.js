import {axiosService} from "./axios.service";
import {urls} from "../configs";

const usersService = {
    getAll: () => axiosService.get(urls.users)
}

export {
    usersService
}