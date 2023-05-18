import React from 'react'
import hand2Image from '../imgs/hand2.png';
import milkImage from '../imgs/milk.png';
import sprinklesImage from '../imgs/sprinkles.png';
import loliImage from '../imgs/lolli_icon.png';
import gumballImage from '../imgs/gumball.png';

export default function Content(props) {
   return (
    <>
    <section class="container-fluid px-0 my-3">
    <div class="row align-items-center">
        <div class="col-lg-6">
            <div id="headingGroup" style={{color:  props.mode == 'dark' ? 'white' : 'black'}} class="text-white text-center d-none d-lg-block mt-5">
                <h1 class="">PRACTICE<span>/</span>OF<span>/</span>REACT</h1>
                <h1 class="">PRACTICE<span>/</span>OF<span>/</span>REACT</h1>
                <h1 class="">PRACTICE<span>/</span>OF<span>/</span>REACT</h1>
                <h1 class="">PRACTICE<span>/</span>OF<span>/</span>REACT</h1>
                <h1 class="">PRACTICE<span>/</span>OF<span>/</span>REACT</h1>
                <h1 class="">PRACTICE<span>/</span>OF<span>/</span>REACT</h1>
                <h1 class="">PRACTICE<span>/</span>OF<span>/</span>REACT</h1>
            </div>
        </div>
        <div class="col-lg-6">
            <img class="img-fluid" src={hand2Image} alt=""/>
        </div>
    </div>
</section>

<section class="container-fluid px-0 my-3" style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>
    <div class="row align-items-center content">
        <div class="col-md-6 order-2 order-md-1">
            <img src={milkImage} alt="" class="img-fluid"/>
        </div>
        <div class="col-md-6 text-center order-1 order-md-2">
            <div class="row justify-content-center">
                <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                    <h2>PRACTICE OF REACT</h2>
                    <img src={loliImage} alt="" class="d-none d-lg-inline"/>
                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae beatae, maiores deserunt in voluptatibus aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur repellat eveniet quidem
                        voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam autem nam ex deserunt debitis eaque ratione! Nobis, quidem assumenda.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="container-fluid px-0 my-3" style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>
    <div class="row align-items-center content">
        <div class="col-md-6 order-2 order-md-1">
            <img src={milkImage} alt="" class="img-fluid"/>
        </div>
        <div class="col-md-6 text-center order-1 order-md-2">
            <div class="row justify-content-center">
                <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                    <h2>PRACTICE OF REACT</h2>
                    <img src={loliImage} alt="" class="d-none d-lg-inline"/>
                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae beatae, maiores deserunt in voluptatibus aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur repellat eveniet quidem
                        voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam autem nam ex deserunt debitis eaque ratione! Nobis, quidem assumenda.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="row align-items-center content my-3" style={{color:  props.mode == 'light' ? 'black' : 'white'}}>
    <section class="container-fluid px-0">
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src={milkImage} alt="" class="img-fluid"/>
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2>PRACTICE OF REACT</h2>
                        <img src={loliImage} alt="" class="d-none d-lg-inline"/>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae beatae, maiores deserunt in voluptatibus aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur repellat eveniet
                            quidem voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam autem nam ex deserunt debitis eaque ratione! Nobis, quidem assumenda.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div></>


  )
}
