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
            <p class="lead text-white mt-4 mb-5">
              Just provide your Destination,We'll reach out to you !
            </p>
            <div class="btn-wrapper"></div>
          </div>
        </div>
        <b-card>
          <b-card
            title="Passenger 1"
            class="shadow"
            style="border-left: 5px dotted red"
            v-show="acceptedReq"
          >
            <div class="row">
              <div class="col-3 border">
                Source: {{ passenger[0].user.source }}
              </div>
              <div class="col-3 border">
                Destination
                {{ passenger[0].user.destination }}
              </div>
              <div class="col-3 border">Name: {{ passenger[0].user.name }}</div>
              <div class="col-3 border">
                Mobile: {{ passenger[0].user.mobile }}
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4">
                <b-button variant="info" @click="accepted">accept</b-button>
                <b-button @click="declined">decline</b-button>
              </div>
              <div class="col-4"></div>
            </div>
          </b-card>
        <b-card v-show="!acceptedReq">
             <p class=" card shadow lead align-items-center mt-4 mb-5" style="text-align:center">
              Response sent !!!
            </p>

        </b-card>
        </b-card>
        <div
          class="row align-items-center justify-content-around stars-and-coded"
        >
          <template> </template>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    this.fetchUser();
  },
  data() {
    return {
      passenger: [],
      flagme: true,
      acceptedReq:true,
      showfeed:false
    };
  },
  watch: {
    source: "notNullVariables",
    destination: "notNullVariables",
    username: "notNullVariables",
    mobile: "notNullVariables",
  },
  methods: {
    fetchUser() {
      this.passenger.push({
        user: {
          source: localStorage.getItem("userS"),
          destination: localStorage.getItem("userD"),
          name: localStorage.getItem("userName"),
          mobile: localStorage.getItem("mobile"),
        },
      });
    },
    accepted(){
        this.acceptedReq=false;
        localStorage.setItem("accepted",'true')

    },
    declined(){

    }

   
  },
};
</script>
<style>
</style>
