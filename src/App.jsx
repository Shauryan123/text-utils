import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Content from "./components/Content";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import TextRotator from "./components/TextRotator";

import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

let name = "shauryan";

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    // const removeBodyClasses = ()=>{
    //     document.body.classList.remove('bg-light')
    //     document.body.classList.remove('bg-dark')
    //     document.body.classList.remove('bg-warning')
    //     document.body.classList.remove('bg-danger')
    //     document.body.classList.remove('bg-success')
    // }
    const showAlert = (message, type) => {

        setAlert({
            message: message,
            type: type
        })

        setTimeout(() => {setAlert(null)}, 3000);

    }
    const toggleMode = () => {
        if (mode == 'light') {

            setMode('dark');
            // document.body.style.backgroundColor = '#03045e';
            showAlert("Dark Mode has been Enabled", "success ");
            document.title = "Text-Utils -Dark Mode Enabled";
            // document.body.style.backgroundColor = '#03045e';
            document.body.style.backgroundImage = 'url("https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg")';

        } else {
            setMode('light');
            // document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been Enabled", "success ");
            document.title = "Text-Utils -Light Mode Enabled";
            // document.body.style.backgroundColor = 'white';
            document.body.style.backgroundImage = 'url("https://thumbs.dreamstime.com/b/light-effect-background-abstract-light-background-light-leak-can-be-used-different-blending-modes-to-enhance-photography-images-65556170.jpg")';

        }
    }
    return (
        <>
      <Router>
        <div className="container-fluid px-0">

  <Navbar title="TextUtils" mode={mode} aboutText = "About Us" toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">

  <TextRotator/>
  <Routes>
           <Route exact path="/about" element={<About mode={mode} />} />
           <Route exact path="/content" element={<Content mode={mode}/>} />
          <Route exact path="/" element={ <TextForm showAlert ={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
  </Routes>

    </div>
    <Footer mode={mode}/>
  </div>
</Router>
  </>
    );
  }

  export default App;
