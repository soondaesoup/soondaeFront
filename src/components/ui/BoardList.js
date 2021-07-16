import React, {useEffect, useState} from 'react';
import boardListService from "../service/boardListService";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Card from "@material-ui/core/Card";

const initState = {
    boardListDTO: [],
    listRequestDTO: {},
    pageMaker: {},
}

const BoardList = () => {

    const [data, setData] = useState(initState);

    useEffect(() => {
        boardListService.getList().then(res => {
            setData(res);
        })
    },[])

    const list = data.boardListDTO.map(value =>
        console.log(value)
    )


    return (
        <div>
            <h2>BoardList!!</h2>
            {list}
        </div>
    );
};

export default BoardList;