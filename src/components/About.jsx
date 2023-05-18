import React,{useState, useRef,useEffect} from 'react'
import loliImage from '../imgs/lolli_icon.png';
import * as THREE from 'three';



export default function About(props) {



  const [myStyle, setMyStyle] = useState(
    {
        height: '100%',
        color: 'white',
        backgroundColor:'black'

    });
    const [myStyle2, setMyStyle2] = useState(
      {
          width: '18rem',
          color: 'white',
          backgroundColor:'black'

      });
const [btnText, setBtnText] = useState("Enable Light Mode");
    const toggleStyle = () => {


      if (myStyle.color == "white") {

        setMyStyle({
          color:"black",
          backgroundColor:"white"
        })
        setMyStyle2({
        width: '18rem',
        color:"black",
        backgroundColor:"white"});
        for (let i = 0; i < document.getElementsByTagName("button").length; i++) {

          const t = document.getElementsByTagName("button")[i];
          t.classList.remove("shadow");
          t.style.boxShadow = "";
     }
        setBtnText("Enable Dark Mode");
      } else {
        setMyStyle({
          color:"white",
          backgroundColor:"black",
          border: '1px solid white',
        })
        setMyStyle2({
          width: '18rem',
          color:"white",
          backgroundColor:"black"});

          for (let i = 0; i < document.getElementsByTagName("button").length; i++) {

            const t = document.getElementsByTagName("button")[i];
            t.classList.remove("shadow");
            t.style.boxShadow = "5px 5px 5px pink";
       }




        setBtnText("Enable Light Mode");

      }

    }

  return (
    <div className={`container-fluid px-0 m-3 d-flex flex-column ${props.mode == 'light' ? 'mod2' : 'mod'}`} style={myStyle}>
      <img style={{width:'100%', height:'500px'}} src='https://st3.depositphotos.com/26272052/32646/v/450/depositphotos_326469644-stock-illustration-glowing-neon-atom-icon-isolated.jpg' alt="" class="img-fluid px-0"/>

      <div className="container" >
        <div className="row justify-content-around">
        <h1 className='text-center my-3'>About us</h1>
        <div class="card col-md-6" style={myStyle2}>
  <img class="card-img-top" src="https://youthfirstinc.org/wp-content/uploads/2019/04/business-1753098_1280-1030x731.png" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Values</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="btn shadow btn-primary">Go somewhere</button>
        </div>
       </div>
       <div class="card col-md-6" style={myStyle2}>
  <img class="card-img-top" src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmV0dGVyJTIwbGlmZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Life</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="btn shadow btn-primary">Go somewhere</button>
        </div>
       </div>
       </div>
       </div>
       <div className="container my-3" id="first">
       <div className="row justify-content-around">
      <div className="card col-md-6" style={myStyle2}>
      <img class="card-img-top" src="https://cf.ltkcdn.net/family/images/orig/266692-2121x1414-many-cultures.jpg" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Culture</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="btn shadow btn-primary">Go somewhere</button>
        </div>
      </div>
      <div className="card col-md-6 mx-3" id="second" style={myStyle2}>
      <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Endeavours</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="btn shadow btn-primary">Go somewhere</button>
        </div>
      </div>
     </div>
       </div>


<div className="container py-3 my-3">
<button type="button" onClick = {toggleStyle} class="btn btn-primary">{btnText}</button>
</div>
    </div>

  )
}
