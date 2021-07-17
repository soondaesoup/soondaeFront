import axios from "axios";

const baseURL = "http://localhost:8089/api/board/";

const boardListService = () => {

    const getList = async (page) => {
        const result = await axios.get(baseURL + "list?page="+page)
        console.log(result.data)
        return result.data;
    }

    const getOne = async (bno) => {
        const result = await axios.get(baseURL + bno)
        console.log("================== getOne Result", result.data)
        return result
    }

    return {getList, getOne}
}

export default boardListService();