import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import App from './App';
import reportWebVitals from './reportWebVitals';


class SignUp extends React.Component {
  render() {
    return(
      
      <Box component="form" className="container" sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
          <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField name="username"  id="outlined-required"
          label="Username" required/>
        </Grid>
        <Grid item xs={12}>
        <TextField name="password" placeholder="Password" required/>
        </Grid>
        <Grid item xs={12}>
        <Button variant="outlined">SignUp</Button>
        </Grid>
      </Grid>
        </Box>
    );
  }
}
class LoginPage extends React.Component {
  render(){
    return(
      <React.Fragment>
        <SignUp/>
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
root.render(<LoginPage/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
