import axios from "axios";

const baseURL = "http://localhost:8089/api/board/";

const boardListService = () => {

    const getList = async () => {
        const result = await axios.get(baseURL + "list")
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