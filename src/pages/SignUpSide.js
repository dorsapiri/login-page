import { Avatar, CssBaseline, Grid, makeStyles, TextField, Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme=>({
    paper: {
        margin: theme.spacing(8,4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
                    <Avatar></Avatar>
                    <Typography component="h1">
                        SignUp
                    </Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                name="firstname"
                                label="First Name"
                                id="fname"
                                variant="outlined" 
                                margin="normal"
                                autoComplete="fname" 
                                autoFocus
                                fullWidth
                                required/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                 name="lastname"
                                 label="Last Name"
                                 id="lname"
                                 variant="outlined" 
                                 margin="normal" 
                                 autoCapitalize="lname"
                                 fullWidth
                                 required/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                name="email" 
                                id="email-id"
                                label="Email Address"
                                variant="outlined"
                                autoComplete="email" 
                                required
                                fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                name="password"
                                id="pass"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="password"/>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel 
                                control={<Checkbox value="allowExtraEmail" color="primary" />}
                                label="I want to receive inspiration,marketing promotions and updates via email."/>
                            </Grid>
                        </Grid>
                        
                        
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}