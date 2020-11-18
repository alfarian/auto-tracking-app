<template>
  <section class="section-hero section-shaped my-0">
    <div class="shape shape-style-1 shape-primary">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-50"></span>
      <span class="span-75"></span>
      <span class="span-100"></span>
      <span class="span-75"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
    </div>
    <div class="container shape-container d-flex align-items-center">
      <div class="col px-0">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-7 text-center pt-lg">
            <span
              class="text-white alpha"
              style="
                font-size: 50px;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
              "
              >AUTO APP</span
            >
            <!-- <img src="img/brand/white.png" style="width: 200px;" class="img-fluid"> -->
            <p class="lead text-white mt-4 mb-5">
              Just provide your Destination,We'll reach out to you !
            </p>
            <div class="btn-wrapper">
                <div class="row">
                    <div class="col-6">
                         <base-input alternative v-model="source" placeholder="Regular">
              </base-input>
                    </div>
                    <div class="col-6">
                        <base-input alternative v-model="destination" placeholder="Regular">
              </base-input>
                    </div>
             
              
                </div>
              <base-button
                tag="a"
                href="https://www.google.com"
                class="mb-3 mb-sm-0"
                type="info"
                icon="ni ni-single-02"
              >
             Request a Taxi
              </base-button>
              <base-button
                tag="a"
                href="https://www.google.com"
                class="mb-3 mb-sm-0"
                type="white"
                icon="ni ni-circle-08"
              >
              Request an Auto
                
              </base-button>
            </div>
          </div>
        </div>
        <div
          class="row align-items-center justify-content-around stars-and-coded"
        >
          <!-- <div class="col-sm-4">
                        <span class="text-white alpha-7 ml-3">Star us on</span>
                        <a href="https://github.com/creativetimofficial/argon-design-system" target="_blank" title="Support us on Github">
                            <img src="img/brand/github-white-slim.png" style="height: 22px; margin-top: -3px">
                        </a>
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <span class="text-white alpha-7">Coded by</span>
                        <a href="https://www.creative-tim.com" target="_blank" title="Creative Tim - Premium Bootstrap Themes and Templates">
                            <img src="img/brand/creativetim-white-slim.png" class="ml-3" style="height: 30px;">
                        </a>
                    </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      source: "Orkkattery",
      destination:"Vadakara"
    };
  },
};
</script>
<style>
</style>
