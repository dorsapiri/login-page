import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router,Route} from'react-router-dom';
import SignUpSide from './pages/SignUpSide';
import SignInSide from './pages/SignInSide';
//import App from './App';
import reportWebVitals from './reportWebVitals';



function App() {
  return(
    <Router>
      <div className="App">
        <Route path="/signup" component={SignUpSide}/>
        <Route path="/" component={SignInSide}/>
      </div>
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
