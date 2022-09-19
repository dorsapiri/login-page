import { CssBaseline, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme=>({
    paper: {
        margin: theme.spacing(8,4),
    }
}));
export default function SignUp(){
    const classes = useStyles();
    return(
        <Grid container>
            <CssBaseline/>
            <Grid item xs={false} sm={2} md={3}/>
            <Grid item xs={12} sm={8} md={6}>
                <div className={classes.paper}>
                    <form>
                        <TextField
                        name="firstname"
                        label="First Name"
                        id="fname"
                        variant="outlined" />
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}