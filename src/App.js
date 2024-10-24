import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Switch,Route,Link, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }



  const toggleMode =() =>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
   <> 

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

{/* <Router> */}
<div className="container my-3">
<About/>
{/* <Routes>
  <Route exact path="/About" element={<About/>}/>



<Route exact path ="/" 
element={<TextForm showAlert={showAlert} heading ="Enter the text to analyze"  mode={mode}/> }/> */}
{/* </Routes><TextForm showAlert={showAlert} heading ="Enter the text to analyze"  mode={mode}/>  */}

<TextForm showAlert={showAlert} heading ="Enter the text to analyze"  mode={mode}/> 
{/* </Routes> */}

</div>
{/* </Router> */}
{/* <Navbar/> */}
   </>
  );
}

export default App;
