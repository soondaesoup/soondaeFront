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
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from "@material-ui/icons/Favorite";
import boardListService from "../service/boardListService";

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

export default function Album() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(1),
        },
    }))(MuiDialogActions);

    ////////////////////////////////////////////////////////////////////////////////////////////////
    const [data, setData] = useState(initState);

    useEffect(() => {
        const res = boardListService.getList().then(res => {
            setData(res)
        });
    },[])

    // return start
    ////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <React.Fragment>
            <div>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Modal title
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
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
                                        <Button size="small" color="primary" onClick={handleClickOpen}>
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

