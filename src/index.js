import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router,Route, Routes} from'react-router-dom';
import SignUpSide from './pages/SignUpSide';
import SignInSide from './pages/SignInSide';
//import App from './App';
import reportWebVitals from './reportWebVitals';



function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignUpSide/>}/>
        <Route exact path="/" element={<SignInSide />}/>
      </Routes>
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
