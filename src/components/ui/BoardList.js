import React, {useEffect, useState} from 'react';
import boardListService from "../service/boardListService";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import ModalDialog from "./ModalDialog";

const initState = {
    boardListDTO: [],
    listRequestDTO: {},
    pageMaker: {},
}

const BoardList = () => {


    const useStyles = makeStyles((theme) => ({
        icon: {
            marginRight: theme.spacing(2),
        },

        cardGrid: {
            marginTop: 100,
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        card: {
            height: '140',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            height: 200, //
        },
        cardContent: {
            flexGrow: 1,
            textAlign: 'left'
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },
    }));

    const classes = useStyles();

    const [data, setData] = useState(initState);

    const [open, setOpen] = useState(false); /* Modal on/off */

    const modalTrigger = () => {
        console.log("modalTrigger activate", open)
        setOpen(!open);
    }

    useEffect(() => {
        boardListService.getList().then(res => {
            setData(res);
        })
    }, [])

    const list = data.boardListDTO.map(value =>
        // console.log(value.boardDTO.btitle)
        <Grid item xs={12} sm={3}>

            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography>
                        <div>{value.boardDTO.btitle}</div>
                    </Typography>
                    <Typography>
                        <div>{value.boardDTO.bprice}</div>
                    </Typography>
                    <Typography>
                        <div>{value.userDTO.mnickName}</div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={modalTrigger} size="small" color="primary">
                        상세보기
                    </Button>
                    <Button size="small" color="primary">
                        찜
                    </Button>
                    <Button size="small" color="primary">
                        <FavoriteIcon/>{value.favoriteCount}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )

    return (
        <div>
            <Container fixed className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={2}>
                    {list}
                </Grid>
            </Container>
            <ModalDialog
                modalTrigger={modalTrigger}
                open={open}
            />
        </div>
    );
};

export default BoardList;