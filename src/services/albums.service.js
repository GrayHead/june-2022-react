import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

const albumsService = {
    getAll: () => axiosService.get(urls.albums)
}

export {
    albumsService
}