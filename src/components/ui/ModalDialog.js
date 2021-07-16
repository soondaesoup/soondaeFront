import React, {useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import boardListService from "../service/boardListService";

/* 모달창 설정 시작 */
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(2),
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
/* 모달 설정 끝 */

/*  */

/* */

const ModalDialog = ({modalTrigger, open}) => {

    console.log('dialog 실행')
    
    const bno = 22;
    const [data, setData] = useState({
        boardDTO:[],
        replyDTO:[],
        boardImageDTO:[],
        withMemberDTO:[],
        favoriteCount:0
    });

    useEffect(() => {
        boardListService.getOne(22).then(value =>
            setData(value.data),
        )
    }, [])

    console.log('data의 값', data)

    return (
        <div>
            <Dialog
                onClose={modalTrigger}
                aria-labelledby="customized-dialog-title"
                open={open}>
                <DialogTitle id="customized-dialog-title" onClose={modalTrigger}>
                    [{data.boardDTO.bcategory}] {data.boardDTO.btitle}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {/*{<img src={} alt="잉"/>}*/}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={modalTrigger} color="primary">
                        예매하기
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ModalDialog;