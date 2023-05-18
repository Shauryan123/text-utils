import React from 'react';

export default function Footer(props) {

  return (
    <>
     <section class="">

  <footer class="text-center text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>

    <div class="container p-4 pb-0">

      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
          <button type="button" class="btn btn-outline-light btn-rounded">
             Sign Up!
          </button>
        </p>
      </section>

    </div>

    <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2023 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">{"  Shauryan Agrawal"}</a>
    </div>

  </footer>

</section>
    </>
  );
}
