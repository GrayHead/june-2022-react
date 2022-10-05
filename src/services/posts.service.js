import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getAll: () => axiosService.get(urls.posts)
}

export {
    postsService
}