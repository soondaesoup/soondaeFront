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
import Pagination from '@material-ui/lab/Pagination';

const initState = {
    boardListDTO: [],
    listRequestDTO: {
        keyword: "",
        page: 1,
        size: 8,
        type: "",
    },
    pageMaker: {
        next: true,
        page: 1,
        pageNumberList: [],
        prev: false,
        size: 8,
    },
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

    useEffect(() => {
        boardListService.getList(data.listRequestDTO.page).then(res => {
            setData(res);
        })
    }, [data.listRequestDTO.page])

    const movePage = (num) => {
        setData({...data, listRequestDTO: {
            page: num
            }})
    }

    const modalTrigger = () => {
        setOpen(!open);
    }


    const list = data.boardListDTO?.map(value =>
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

    const PageList = ({data, movePage}) => {

        return (
            <div>
                {data.pageMaker.prev == false ? <button onClick={() => movePage(data.listRequestDTO.page-1)} disabled>prev</button> : <button onClick={() => movePage(data.listRequestDTO.page-1)}>prev</button>}
                {data.pageMaker.pageNumberList?.map(page =>
                    <button onClick={() => movePage(page)} key={page}>{page}</button>
                )}
                {data.pageMaker.next == false ? <button onClick={() => movePage(data.listRequestDTO.page+1)} disabled>next</button> : <button onClick={() => movePage(data.listRequestDTO.page+1)}>next</button>}
            </div>
        );
    }

    return (
        <div>
            <Container fixed className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={2}>
                    {list}
                </Grid>
                <PageList data={data} movePage={movePage}></PageList>
            </Container>
            <ModalDialog
                modalTrigger={modalTrigger}
                open={open}
            />
        </div>
    );
};

export default BoardList;