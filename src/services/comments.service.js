import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

const commentService = {
    getAll: () => axiosService.get(urls.comments)
}

export {
    commentService
}