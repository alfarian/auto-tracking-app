<template>
  <section
    class="section-hero section-shaped my-0"
    :style="{
      backgroundImage: `url(${require('@/assets/img/car6.jpg')})`,
      height: '100vh',
    }"
  >
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
        <div
          id="grad"
          class="card row justify-content-center align-items-center"
        >
          <div class="col-lg-7 text-center pt-lg" style="margin-top: -50px">
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
              {{ message }}
              Just provide your Destination,We'll reach out to you !
            </p>
            <div v-show="request">
              <div class="btn-wrapper">
                <div class="row">
                  <div class="col-6">
                    <base-input
                      alternative
                      type="text"
                      v-model="source"
                      placeholder="Source"
                    >
                    </base-input>
                  </div>
                  <div class="col-6">
                    <base-input
                      type="text"
                      alternative
                      v-model="destination"
                      placeholder="Destination"
                    >
                    </base-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <b-form-group>
                      <b-form-radio-group
                        size="lg"
                        v-model="bookingFor"
                        :options="bookingForOptions"
                        plain
                      ></b-form-radio-group>
                    </b-form-group>
                  </div>
                </div>

                <div v-if="this.bookingFor == 1" class="row">
                  <div class="col-6">
                    <base-input
                      type="text"
                      alternative
                      v-model="username"
                      placeholder="Name"
                    >
                    </base-input>
                  </div>
                  <div class="col-6">
                    <base-input
                      type="number"
                      alternative
                      v-model="mobile"
                      placeholder="Mobile"
                    >
                    </base-input>
                  </div>
                </div>

                <b-button
                  tag="a"
                  :disabled="flagme"
                  @click="requestAuto"
                  class="mb-3 mb-sm-0"
                  variant="success"
                >
                  Request an Auto
                </b-button>
                <br />
              </div>
              <br />
              <br />
            </div>
            <div v-show="submitted">
              <div class="btn-wrapper">
                <div v-show="!acceptedReq" class="">
                  <div class="row">
                    <div class="col-3"></div>

                    <div class="col-6" style="margin-left: 50px">
                      <div class="row">
                        <div class="col-6">
                          <b-spinner variant="info"></b-spinner>
                        </div>
                      </div>
                    </div>
                    <div class="col-3"></div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-12">
                      <b-button variant="warning" @click="cancelAndNew"
                        >Cancel and Start a New Ride</b-button
                      >
                    </div>
                  </div>
                </div>
                <div id="random_no_container">
                  <b-card
                    id="cardDriver"
                    title="Your Driver has been assigned !"
                    v-show="acceptedReq"
                  >
                    <div class="row">
                      <div class="col-6 border">
                        Name: {{ myDriver[0].drivername }}
                      </div>
                      <div class="col-6 border">
                        Mobile:
                        {{ myDriver[0].drivermobile }}
                      </div>
                      <!-- <div class="col-4 border">
                        Auto: {{ driverDetails[0].driver.autonumber }}
                      </div> -->
                    </div>
                    <br />
                    <br />
                  </b-card>
                </div>
                <br />
              </div>
              <br />
            </div>
          </div>
        </div>
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
import axios from "axios";
import jQuery from "jquery";
import BaseButton from "../../components/BaseButton.vue";

// function random_no() {
//   var ran = Math.random();
//   if (localStorage.getItem("accepted") == "true") {
//   }
//   jQuery("#random_no_container").html(ran);
// }

export default {
  components: { BaseButton },
  data() {
    return {
      bookingFor: false,
      bookingForOptions: [
        { text: "Booking For Self", value: false },
        { text: "Booking for Someone", value: true },
      ],
      variants: [
        "primary",
        "secondary",
        "danger",
        "warning",
        "success",
        "info",
        "light",
        "dark",
      ],
      acceptedReq: false,
      message: "",
      flagme: true,
      source: "",
      destination: "",
      username: "",
      mobile: "",
      submitted: false,
      timer: null,
      request: true,
      myDriver: [{ drivername: "", drivermobile: null }],
      driverDetails: [
        {
          driver: {
            name: "",
            mobile: "",
            autonumber: "",
          },
        },
      ],
    };
  },
  mounted() {},
  watch: {
    source: "notNullVariables",
    destination: "notNullVariables",
    username: "notNullVariables",
    mobile: "notNullVariables",
  },
  methods: {
    cancelAndNew() {
      this.acceptedReq = false;
      this.submitted = false;
      this.request = true;
      // window.location.reload();
    },
    fetchHole() {
      axios
        .get(
          `https://aye-auto.herokuapp.com/booking/${this.$store.state.storeUsers.bookingId}`
        )
        .then((res) => {
          console.log("res", res);
          if (res.data.driver_mobile != null) {
            this.myDriver = [];
            this.myDriver.push({
              drivername: res.data.driver_name,
              drivermobile: res.data.driver_mobile,
            });
            console.log("driver assigned", this.myDriver);
            this.acceptedReq = true;
            this.request = false;
            this.submitted = true;

            clearInterval(this.timer);
          }
        })
        .catch((error) => {
          console.error("error msg", error);
        });
      // }
    },

    notNullVariables() {
      if (this.source.length != 0 && this.destination.length != 0) {
        this.flagme = false;
      } else {
        this.flagme = true;
      }
    },
    requestAuto() {
      console.log("details", this.$store.state.storeUsers.userDetails);
      let b_data = {};
      if (this.bookingFor) {
        b_data = {
          source: this.source,
          destination: this.destination,
          name: this.username,
          mobile: this.mobile,
          customer_id: this.$store.state.storeUsers.userId,
          booking_for_someone_else: this.bookingFor,
        };
      } else {
        b_data = {
          source: this.source,
          destination: this.destination,
          customer_id: this.$store.state.storeUsers.userId,
          booking_for_someone_else: this.bookingFor,
        };
      }
      axios
        .post("https://aye-auto.herokuapp.com/booking", b_data)
        .then((response) => {
          console.log("succeful booking id is ", response.data);
          this.$store.state.storeUsers.bookingId = response.data.booking_id;
          alert("Booking Completed!");

          this.request = false;
          this.submitted = true;
          this.timer = setInterval(
            function () {
              this.fetchHole();
            }.bind(this),
            6000
          );
        })
        .catch((error) => {
          alert(`Could not Make the Booking \n ERR: ${error.error.message}`);
        });
      // this.$store.state.storeUsers.usersDB.push({ user1: data });

      // localStorage.setItem("userS", this.source);
      // localStorage.setItem("userD", this.destination);
      // localStorage.setItem("userName", this.username);
      // localStorage.setItem("mobile", this.mobile);
      // this.request = false;
      // this.submitted = true;
    },
  },
};
</script>
<style>
#grad {
  background-image: linear-gradient(to bottom right, rgb(192, 76, 76), yellow);
  border-radius: 75px;
  width: 45vw;
  margin-left: 130px;
}
#cardDriver {
  border-radius: 20px;
}
</style>
