<template>
  <div
    class="vue-tempalte"
    :style="{
      backgroundImage: `url(${require('@/assets/img/car6.jpg')})`,
      height: '100vh',
    }"
  >
    <section style="background-color: whitesmoke; height: 50px" class="shadow">
      <b-navbar toggleable="lg" class="border">
        <b-navbar-brand href="#">Welcome to Auto App</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto"> </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </section>
    <br /><br />
    <br /><br />

    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <b-card class="shadow sm">
            <b-tabs content-class="mt-3" justified>
              <b-tab title="SIGN IN" active>
                <div class="container">
                  <br />
                  <div class="row">
                    <div class="col-6">
                      <b-form-group>
                        <b-form-radio-group
                          size="lg"
                          v-model="selected"
                          :options="options"
                          plain
                        ></b-form-radio-group>
                      </b-form-group>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      v-model="phone"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <b-button
                    variant="info"
                    type="submit"
                    @click="authenticateWithGoogle"
                    class="btn btn-dark btn-lg btn-block"
                    style="margin-top: 10px"
                  >
                    Send OTP
                  </b-button>
                  <div id="recaptcha-container" style="margin-top: 10px"></div>
                  <div
                    class="form-group"
                    v-if="otpSent"
                    style="margin-top: 10px"
                  >
                    <label>OTP</label>
                    <input
                      type="number"
                      v-model="otp"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <b-button
                    style="margin-top: 10px"
                    variant="info"
                    type="submit"
                    @click="verify"
                    class="btn btn-dark btn-lg btn-block"
                    v-if="otpSent && otp && otp.length > 0"
                  >
                    Verify and Login
                  </b-button>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";
export default {
  data() {
    return {
      phone: "8086271010",
      otp: "",
      otpSent: false,
      verificationId: "",
      selected: "user",
      options: [
        { text: "Passenger", value: "user" },
        { text: "Driver", value: "driver" },
      ],
    };
  },
  mounted() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
  },
  methods: {
    authenticateWithGoogle() {
      this.phone = this.phone.trim();
      const phoneNumber = `+91${this.phone}`;
      const appVerifier = window.recaptchaVerifier;
      const thisInstance = this;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          console.log(confirmationResult);
          thisInstance.otpSent = true;
          thisInstance.verificationId = confirmationResult.verificationId;
        })
        .catch(function (error2) {
          console.log("othilla :(", error2);
          thisInstance.resetCaptcha();
        });
    },
    verify() {
      const thisInstance = this;
      var credential = firebase.auth.PhoneAuthProvider.credential(
        thisInstance.verificationId,
        thisInstance.otp
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((value) => {
          console.log(value);
          this.getUserRegistered();
        })
        .catch((error1) => {
          this.resetCaptcha();
          alert("Sorry! Signin failed. Please try again.");
          console.log("veendum moonji", error2);
        });
    },
    resetCaptcha() {
      this.otpSent = false;
      this.verificationId = "";
      this.otp = "";
      window.recaptchaVerifier.render().then(function (widgetId) {
        grecaptcha.reset(widgetId);
      });
    },
    getUserRegistered() {
      const thisInstance = this;
      axios
        .get(
          `https://aye-auto.herokuapp.com/${
            this.selected === "user" ? "customer" : "driver"
          }/mobile/${this.phone}/validate`
        )
        .then((response) => {
          console.log(response);
          thisInstance.$store.state.storeUsers.mobileNumber =
            thisInstance.phone;
          thisInstance.$store.state.storeUsers.personaType =
            thisInstance.selected;
          if (!response.data.result) {
            thisInstance.$router.push("register-user");
            return;
          } else {
            if (thisInstance.selected == "driver") {
              this.$store.state.storeUsers.driverId = response.data.details.driver_id;
              this.$store.state.storeUsers.driverDetails = response.data.details;
              thisInstance.$router.push("driverpage");
              return;
            } else if (thisInstance.selected == "user") {
              this.$store.state.storeUsers.userId = response.data.details.customer_id;
              this.$store.state.storeUsers.userDetails = response.data.details;
              thisInstance.$router.push("components");
              return;
            }
          }
        })
        .catch((error) => {
          alert(
            `Sorry! There was an error fetching user details. Please Refresh and Try again. \n Error Details: ${error.toString()}`
          );
          this.resetCaptcha();
        });
    },
  },
};
</script>

