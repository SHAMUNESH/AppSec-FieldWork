<?php include('server.php'); ?>

<!DOCTYPE html>
<html>
<head>
	<title>AppSec - Dashboard</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<style type="text/css">
	.alert-popup{
		width: 30%;
		margin-left:35%;
	}
</style>

   
</head>
<body style="background-color:  #ccd1d1 ;">
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a style="color: white;" class="navbar-brand" href="#">AppSec Dashboard</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a style="color: white;" class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a style="color: white;" class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a style="color: white;" class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <button type="button" class="btn btn-default"><a href="dashboard.php?logout='1'" style="color: white">logout</a></button>
    </div>
  </div>
</nav>
<br>
	 <div class="alert-popup">
	    		<div class="alert alert-primary alert-dismissible fade show" role="alert">
	      <strong>Your Application,</strong> has been configured to AppSec Key!<br> You have to complete checkpoints in your key to access files!
	      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	    </div>
<br>
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="./images/fileimg.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Your Files</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="AppSec checkpoint!" data-bs-content="Complete the FaceID, to access or download your files!">Download</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./images/admin.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Admin</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="AppSec checkpoint!" data-bs-content="Sorry! You can't access, unless admin verifies in AppSec Key!">Access</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./images/files.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Team Files</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
         <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="AppSec checkpoint!" data-bs-content="We have send a request to your TL! Please wait..">View Files</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./images/profile.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Profile</h5>
        <p class="card-text">Edit your Account details. Update, emails, password or internal office settings.</p>
        <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="AppSec checkpoint!" data-bs-content="We have send a request to your TL! Please wait..">Settings</button>
      </div>
    </div>
  </div>
</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script type="text/javascript">
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

</script>
</html>