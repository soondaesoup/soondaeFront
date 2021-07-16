import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import FavoriteIcon from "@material-ui/icons/Favorite";
import boardListService from "../service/boardListService";
import ModalDialog from "./ModalDialog";

const initState = {
    boardDTO: [],
    boardImageDTO: [],
    userDTO: [],
    favoriteCount: 0,
    replyCount: 0,
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },

    cardGrid: {
        marginTop:100,
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
        textAlign:'left'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const MainList = () => {

    const [data, setData] = useState(initState);
    const [open, setOpen] = useState(false); /* Modal on/off */

    const classes = useStyles();

    ////////////////////////////////////////////////////////////////////////////////////////////////

    const modalTrigger = () => {
        console.log("modalTrigger activate", open)
        setOpen(!open);
    }

    useEffect(() => {
        const res = boardListService.getList().then(res => {
            setData(res)
        });
    },[])

    // return start
    ////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container fixed className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={2}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography>
                                            <div>상품명</div>
                                        </Typography>
                                        <Typography>
                                            <div>12000원</div>
                                        </Typography>
                                        <Typography>
                                            <div>주소</div>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={modalTrigger}>
                                            상세보기
                                        </Button>
                                        <Button size="small" color="primary">
                                            찜
                                        </Button>
                                        <Button size="small" color="primary">
                                            <FavoriteIcon/>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {/* ModalDialog Unit*/}
                <ModalDialog
                    modalTrigger={modalTrigger}
                    open={open}
                />
                {/* End ModalDialog Unit*/}
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

export default MainList

