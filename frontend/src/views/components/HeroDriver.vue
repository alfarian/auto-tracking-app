<template>
  <section
    class="section-hero section-shaped my-0"
    :style="{
      backgroundImage: `url(${require('@/assets/img/car2.jpg')})`,
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
      <div id="graddriver" class="col px-0">
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
            <p class="lead text-black mt-4 mb-5">
              <b
                style="
                  font-size: 30px;
                  font-family: Arial, Helvetica, sans-serif;
                  font-weight: bold;
                "
              >
                Pick your passengers from here !</b
              >
            </p>
            <div class="btn-wrapper"></div>
          </div>
        </div>
        <b-card
          style="
            background-color: transparent;
            border: none;
            overflow: scroll;
            height: 400px;
          "
        >
          <b-card
            id="passenger"
            :title="'Passenger' + i.booking_id"
            class="shadow"
            style="border-left: 5px dotted red"
            v-show="acceptedReq"
            v-for="(i, index) in allBookings"
            :key="index"
          >
            <div class="row">
              <div class="col-3 border">Source: {{ i.source }}</div>
              <div class="col-3 border">
                Destination
                {{ i.destination }}
              </div>
              <div class="col-3 border">
                Name: {{ i.customer_name }} <br />
                <div v-if="i.booking_for_someone_else != 0" class="row">
                  Name of Referral: {{ i.name }}
                </div>
              </div>
              <div class="col-3 border">Mobile: {{ i.mobile }}</div>
            </div>
            <br />
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4">
                <b-button variant="info" @click="accepted(i.booking_id)"
                  >accept</b-button
                >
                <b-button @click="declined">decline</b-button>
              </div>
              <div class="col-4"></div>
            </div>
          </b-card>
          <b-card v-show="!acceptedReq">
            <p
              class="card shadow lead align-items-center mt-4 mb-5"
              style="text-align: center"
            >
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
import axios from "axios";
export default {
  mounted() {
    console.log('driverid',this.$store.state.storeUsers.driverId);
    this.fetchUser();
  },
  data() {
    return {
      allBookings: [],
      passenger: [],
      flagme: true,
      acceptedReq: true,
      showfeed: false,
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
      axios
        .get("https://aye-auto.herokuapp.com/bookings")
        .then((response) => {
          console.log("all bookings ", response.data);
          this.allBookings = response.data;
        })
        .catch((error) => {
          alert(`Could not load bookings \n ERR: ${error.error.message}`);
        });
      this.passenger.push({
        user: {
          source: localStorage.getItem("userS"),
          destination: localStorage.getItem("userD"),
          name: localStorage.getItem("userName"),
          mobile: localStorage.getItem("mobile"),
        },
      });
    },
    accepted(b_id) {
      console.log("id", b_id);
      let data ={
        booking_id:b_id,
        driver_id:this.$store.state.storeUsers.driverId
      }
      console.log("did", this.$store.state.storeUsers.driverId);
      console.log("data", data);
      axios
        .post(
          "https://aye-auto.herokuapp.com/booking/accept",data  )
        .then((res) => {
          console.log("response", res.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
      // this.acceptedReq = false;
      localStorage.setItem("accepted", "true");
    },
    declined() {},
  },
};
</script>
<style scoped>
#graddriver {
  background-image: linear-gradient(
    to bottom right,
    rgb(199, 240, 88),
    rgb(81, 185, 233)
  );
  border-radius: 75px;
  width: 45vw;
  margin-left: 130px;
}
#passenger {
  margin: 20px;
}
</style>
