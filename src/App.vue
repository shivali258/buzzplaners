<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
    <div class="container">
      <a class="navbar-brand" href="index.html"
        ><img src="static/images/logo101.svg"  height="40" width="180"></a>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a  class="nav-link">Travel</a>
          </li>
          <li class="nav-item">
            <a  class="nav-link">Events</a
          </li>
          <li class="nav-item">
            <a class="nav-link">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Registration</a>
          </li>
          <li class="nav-item">
            <a  class="nav-link">About Us</a>
          </li>
          <li class="nav-item">
            <a  class="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <router-view/>
    <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Travel</h2>
              <ul class="list-unstyled">
                <li>
                  <a  class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span>Domestic</a
                  >
                </li>
                <li>
                  <a  class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span>International</a
                  >
                </li>
                <li>
                  <a class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span>Student Packages</a
                  >
                </li>
                <li>
                  <a class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span>Family</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Events</h2>
              <ul class="list-unstyled">
                <li>
                  <a class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span>Wedding</a
                  >
                </li>
                <li>
                  <a class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span>Corporative</a
                  >
                </li>
                <li>
                  <a class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span
                    >Student Fest</a
                  >
                </li>
                <li>
                  <a class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span
                    >Fashion Show</a
                  >
                </li>
                <li>
                  <a class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span
                    >Social Event</a
                  >
                </li>
                <li>
                  <a class="py-1 d-block"
                    ><span class="ion-ios-arrow-forward mr-3"></span
                    >Exhibitions</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md">
            
          </div>
          <div class="col-md">
              <div class="ftco-footer-widget mb-2">
                <h2 class="ftco-heading-2">Reach Us</h2>
                <div class="row">
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                                <ul class="ftco-footer-social list-unstyled float-md-left float-lft ">
                                  <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                                  <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                                  <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                                </ul>
                              </div>
                </div>
                  </div>
                </div>
                
              </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
