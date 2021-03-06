import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import {InputAdornment} from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles1 = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },

    button : {
        '& > *': {
            margin: theme.spacing(1),
        },
    },


}));

// const useStyles2 = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));


const SearchTextFields = () => {
    const classes = useStyles1();

    return (

        <div id="grid" style={{width: "100%"}}>
            <div id="left">
                <h1>로고 CAMPUED 로고</h1>
            </div>
            <div id="right">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}label="캠핑 용품" />

                    {/*<TextField id="filled-basic" label="Filled" variant="filled" />*/}
                    {/*<TextField id="outlined-basic" label="Outlined" variant="outlined" />*/}
                </form>
                <Button variant="outlined" color="primary">
                    검색
                </Button>
            </div>
            {/*<div className={classes.root}>*/}

            {/*</div>*/}
        </div>

    );
}

// const SearchButton = ()=> {
//
//     const classes = useStyles2();
//
//     return (
//         <div className={classes.root}>
//             <Button variant="outlined" color="primary">
//                 검색
//             </Button>
//         </div>
//     );
// }

export default SearchTextFields;

// export default SearchButton;