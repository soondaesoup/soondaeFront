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

/* 파일 경로 생성 */

const fileTempPath = "C:\\ztemp\\";

/* */

const ModalDialog = ({modalTrigger, open}) => {

    const [data, setData] = useState({
        boardDTO:[],
        replyDTO:[],
        boardImageDTO:[],
        withMemberDTO: {},
        favoriteCount:0
    });

    const replyList = data.replyDTO.map(value =>
        <div>
            <li key={value.rno}>
                {value.rwriter}
                {value.rtext}
                {value.rmodDate}
            </li>
        </div>
    )

    const imgList = data.boardImageDTO.map(value =>
        <div>
            {console.log('imgList',value)}
            <div key={value.fuuid}>
                <img src={fileTempPath+value.fuuid+".jpg"}/>
            </div>
        </div>
    )

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
                    [{data.boardDTO.bcategory}] {data.boardDTO.btitle} ({data.replyDTO.length})
                    가격 : {data.boardDTO.bprice}
                    <div>
                    {data.withMemberDTO.mnickName}
                    {data.withMemberDTO.mphone}
                    {data.withMemberDTO.memail}
                    {data.withMemberDTO.maddress}
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {/*{<img src={fileTempPath+data.} alt="잉"/>}*/}
                        {data.boardDTO.bcontent}
                        {imgList}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <ul>
                        {replyList}
                    </ul>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ModalDialog;