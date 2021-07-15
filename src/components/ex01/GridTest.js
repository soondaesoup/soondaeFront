import React from 'react';
import Grid from "@material-ui/core/Grid";

const GridTest = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>aaaa</h1>
                </Grid>
                <Grid item xs={8}>
                    <h1>bbbb</h1>
                </Grid>
                <Grid item xs={4}>
                    <h1>ccc</h1>
                </Grid>
                <Grid item xs={3}>
                    <h1>ddd</h1>
                </Grid>
                <Grid item xs={3}>
                    <h1>eeee</h1>
                </Grid>
                <Grid item xs={3}>
                    <h1>ffff</h1>
                </Grid>
                <Grid item xs={3}>
                    <h1>gggg</h1>
                </Grid>
            </Grid>
        </div>
    );
};

export default GridTest;