import axios from "axios";

const baseURL = "http://localhost:8089/files/";

const fileService = () => {

    const fileUpload = async (files, bno) => {
        const result = await axios.post(baseURL + "upload")
        console.log(result.data)
        return result.data
    }

    return {fileUpload}

}

export default fileService