import axios from "axios";

const baseURL = "http://localhost:8089/api/board/";


const boardListService = () => {

    const getList = async () => {
        const result = await axios.get(baseURL+"list")
        console.log(result.data)
        return result;
    }







    return {getList}
}

export default boardListService();