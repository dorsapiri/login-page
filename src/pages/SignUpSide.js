import React from "react";
import Container from "@material-ui/core/Container";
import { Avatar, CssBaseline, Grid, TextField, Typography } from "@mui/material";


export default function SignUp(){
return(
    <Container  component="main">
        <CssBaseline/>
        <div>
            <Avatar>
                    
            </Avatar>
            <Typography component="h1">
                Sign Up
            </Typography>
            <form>
                <Grid Container spacing={2}>
                    <Grid item xs="12" xm="6">
                        <TextField name="firstname" autoComplete="fname" required variant="outlined" id="firstname" label="First Name" autoFocus/>
                    </Grid>
                    <Grid item xs="12" xm="6">
                        <TextField name="lastname" autoComplete="lname" required variant="outlined" id="lastname" label="Last Name" autoFocus/>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>
);
}