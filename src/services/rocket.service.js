import {axiosService} from "./axios.service";
import {urls} from "../configs";

const rocketService = {
    getAll: () => axiosService.get(urls.rockets)
}

export {rocketService};