import axios from "axios";
import {baseURL} from "../config";

const axiosService = axios.create({baseURL});

export {
    axiosService
}