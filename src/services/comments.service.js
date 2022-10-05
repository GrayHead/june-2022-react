import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
    getAll: () => axiosService.get(urls.comments)
}

export {
    commentsService
}