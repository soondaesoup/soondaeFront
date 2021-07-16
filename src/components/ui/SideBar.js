import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import BoardRegisterModal from "./BoardRegisterModal";
import ModalDialog from "./ModalDialog";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'white',
    },
    drawer: {
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        marginLeft: `calc(100% - ${drawerWidth}px)`

    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));



const ClippedDrawer = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false); /* Modal on/off */

    const modalTrigger = () => {
        console.log("modalTrigger activate", open)
        setOpen(!open);
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <LockOpenIcon></LockOpenIcon>
                            </ListItemIcon>
                            <ListItemText primary={"로그인"}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <PersonIcon></PersonIcon>
                            </ListItemIcon>
                            <ListItemText primary={"회원가입"}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem button>
                            <ListItemIcon><FavoriteIcon/></ListItemIcon>
                            <ListItemText primary={"찜 상품"}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><LocalMallIcon/></ListItemIcon>
                            <ListItemText
                                primary={"내 상품 등록"}
                                onClick={modalTrigger}
                            />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            {/* ModalDialog Unit*/}
            <BoardRegisterModal
                modalTrigger={modalTrigger}
                open={open}
            />
            {/* End ModalDialog Unit*/}
        </div>
    );
}

export default ClippedDrawer;