<template>
  <div
    class="vue-tempalte"
    :style="{
      backgroundImage: `url(${require('@/assets/img/car1.jpg')})`,
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
    <br />

    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <b-card class="shadow sm">
            <b-tabs content-class="mt-3" justified>
              <b-tab title="REGISTER">
                <div class="container">
                  <br />
                  <div class="row">
                    <div class="col-6">
                      <b-form-group>
                        <b-form-radio-group
                          v-model="selected"
                          :options="options"
                          plain
                          disabled
                          name="plain-inline"
                        ></b-form-radio-group>
                      </b-form-group>
                    </div>
                  </div>
                  <div v-if="this.selected == 'driver'" class="row">
                    <div class="col">
                      <div class="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          v-model="driver.name"
                          class="form-control form-control-sm"
                        />
                      </div>
                      <div class="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          v-model="driver.email"
                          class="form-control form-control-sm"
                        />
                      </div>
                      <div class="form-group">
                        <label>Mobile</label>
                        <input
                          type="number"
                          v-model="driver.mobile"
                          disabled
                          class="form-control form-control-sm"
                        />
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <b-form-group>
                            <label> Gender</label>

                            <b-form-radio-group
                              v-model="driver.gender"
                              :options="genderOptions"
                              plain
                            ></b-form-radio-group>
                          </b-form-group>
                        </div>
                        <div class="col-6">
                          <b-form-group>
                            <label> Age</label>
                            <input
                              type="number"
                              v-model="driver.age"
                              class="form-control form-control-sm"
                            />
                          </b-form-group>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Auto Number</label>
                        <input
                          type="text"
                          v-model="driver.auto_num"
                          class="form-control form-control-sm"
                        />
                      </div>

                      <b-button
                        :disabled="flagdisable"
                        variant="info"
                        type="submit"
                        @click="registerDriver"
                        class="btn btn-warning btn-lg btn-block"
                      >
                        Create Account
                      </b-button>
                    </div>
                  </div>
                  <!-- user -->
                  <div v-if="this.selected == 'user'" class="row">
                    <div class="col">
                      <div class="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          v-model="user.name"
                          class="form-control form-control-sm"
                        />
                      </div>
                      <div class="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          v-model="user.email"
                          class="form-control form-control-sm"
                        />
                      </div>
                      <div class="form-group">
                        <label>Mobile</label>
                        <input
                          type="number"
                          v-model="user.mobile"
                          class="form-control form-control-sm"
                          disabled
                        />
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <b-form-group>
                            <label> Gender</label>

                            <b-form-radio-group
                              v-model="user.gender"
                              :options="genderOptions"
                              plain
                            ></b-form-radio-group>
                          </b-form-group>
                        </div>
                        <div class="col-6">
                          <b-form-group>
                            <label> Age</label>
                            <input
                              type="number"
                              v-model="user.age"
                              class="form-control form-control-sm"
                            />
                          </b-form-group>
                        </div>
                      </div>

                      <b-button
                        :disabled="flagdisable"
                        variant="info"
                        type="submit"
                        @click="registerUser"
                        class="btn btn-warning btn-lg btn-block"
                      >
                        Create Account
                      </b-button>
                    </div>
                  </div>
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
import axios from "axios";
export default {
  data() {
    return {
      flagdisable: false,
      selected: "user",
      options: [
        { text: "Passenger", value: "user" },
        { text: "Driver", value: "driver" },
      ],
      genderOptions: [
        { text: "Male", value: 0 },
        { text: "Female", value: 1 },
      ],
      user: {
        name: "",
        email: "",
        age: null,
        mobile: 0,
        gender: 0,
      },
      driver: {
        name: "",
        email: "",
        age: null,
        mobile: 0,
        gender: 0,
        auto_num: "KL-XX-XXXX",
      },
    };
  },
  mounted() {
    this.selected = this.$store.state.storeUsers.personaType;
    if (this.selected === "user") {
      this.user.mobile = this.$store.state.storeUsers.mobileNumber;
    } else {
      this.driver.mobile = this.$store.state.storeUsers.mobileNumber;
    }
  },
  methods: {
    registerUser() {
      axios
        .post("https://aye-auto.herokuapp.com/customer", this.user)
        .then((response) => {
          console.log(response.data);
          alert("User Added Successfuly");
          this.$store.state.storeUsers.personaType = "user";
          this.$store.state.storeUsers.userId = response.data.customer_id;
          this.$router.push("components");
        })
        .catch((error) => {
          alert(`Could not Register User. \n ERR: ${error.error.message}`);
        });
    },
    registerDriver() {
      axios
        .post("https://aye-auto.herokuapp.com/driver", this.driver)
        .then((response) => {
          console.log(response.data);
          alert("Driver Added Successfuly");
          this.$store.state.storeUsers.personaType = "driver";
          this.$store.state.storeUsers.driverId = response.data.driver_id;
          this.$router.push("driverpage");
        })
        .catch((error) => {
          alert(`Could not Register Driver. \n ERR: ${error.error.message}`);
        });
    },
    driverOption() {
      if (this.selected == "driver") {
        this.enterAutoDiv = true;
      }
    },
  },
};
</script>
