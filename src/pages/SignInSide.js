import { Avatar, Button, CssBaseline, Grid, Link, makeStyles } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const useStyles = makeStyles(theme =>({

  avatar:{
    margin:theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  paper:{
    margin:theme.spacing(8,4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' , 
  }
}));

const SignIn = ()=>{
  const classes = useStyles();
  return(
    <Grid container>
      <CssBaseline />
      <Grid item xs={false} sm={2} md={3}/>
      <Grid item xs={12} sm={8} md={6}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1">
            Sign in
          </Typography>
          <form>
          <TextField 
         variant="outlined" 
         id="username" 
         name="username" 
         label="Username" 
         margin="normal" 
         fullWidth 
         required />
          <TextField 
         variant="outlined" 
         name="password" 
         id="password" 
         label="Password" 
         margin="normal"
         fullWidth
         required/>
          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary">SignIn</Button>
          <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
            Don't have an account? Sign Up
            </Link>
          </Grid>
          </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    
  );
}
export default SignIn;