import axios from "axios";

const baseURL = "http://localhost:8089/api/board/";
const loginURL = "http://localhost:8089/login";
const headerObj = {
    headers: {'Content-Type': 'application/json'}};

const boardService = () => {

    const getList = async (page) => {
        const result = await axios.get(baseURL + "list?page="+page+"&keyword")
        console.log(result.data)
        return result.data;
    }

    const getOne = async (bno) => {
        const result = await axios.get(baseURL + bno)
        console.log("================== getOne Result", result.data)
        return result
    }

    const signIn = async (login) => {
        const loginStr = JSON.stringify(login);
        const result = await axios.post(loginURL, loginStr, headerObj);
        return result;
    }

    return {getList, getOne, signIn}
}

export default boardService();