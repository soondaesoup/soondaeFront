import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Link from '@material-ui/core/Link';




const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
    }
    ,
    icon: {
        marginRight: theme.spacing(2),
    },

    cardGrid: {
        display:'flex',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '140',
        display: 'flex',
        flexDirection: 'column',
        width : '100'
    },
    cardMedia: {
        height: 200, //
    },
    cardContent: {
        flexGrow: 1,
        textAlign:'center'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>

            <CssBaseline />
            <div>
                <main>
                    <Grid item xs={10}>
                        <Container fixed className={classes.cardGrid} maxWidth="md" >
                            {/* End hero unit */}

                                <Grid container spacing={1}>
                                    {cards.map((card) => (

                                        <Grid item key={card} xs={9} sm={3}>
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
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                        상세보기
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                        찜
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                        좋아요
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                            </Grid>
                        </Container>
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    );
}