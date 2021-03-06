import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  $('#nav').html(`
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Jurassic World</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item mx-3" id="dino-link">
      <a class="nav-link" href="#">Dinosaurs</a>
    </li>
    <li class="nav-item mx-3" id="staff-link">
      <a class="nav-link" href="#"> Staff</a>
    </li>
    <li class="nav-item mx-3" id="rides-link">
      <a class="nav-link" href="#"> Rides</a>
    </li>
    <li class="nav-item mx-3" id="vendor-link">
      <a class="nav-link" href="#"> Vendors</a>
    </li>
    <li class="nav-item mx-3" id="equipment-link">
      <a class="nav-link" href="#"> Equipment</a>
    </li>
  </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      <button class="btn btn-outline-success ml-auto" id="loginBtn" type="button">Login</button>
      </li>
    </ul>
  </div>
</nav>`);
  $('#loginBtn').on('click', signMeIn);
};

export default { loginButton };
