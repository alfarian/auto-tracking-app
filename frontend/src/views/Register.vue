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
                          v-model="driver.autonumber"
                          class="form-control form-control-sm"
                        />
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          v-model="password"
                          class="form-control form-control-sm"
                        />
                      </div>
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          v-model="confirmpassword"
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
                      <div class="row">
                        <div class="col-6">
                          <p class="forgot-password text-left mt-2 mb-4">
                            <router-link to="/login"
                              >Already have an account?Sign In</router-link
                            >
                          </p>
                        </div>
                        <div class="col-6"></div>
                      </div>
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

                      <div class="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          v-model="password"
                          class="form-control form-control-sm"
                        />
                      </div>
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          v-model="confirmpassword"
                          class="form-control form-control-sm"
                        />
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
                      <div class="row">
                        <div class="col-6">
                          <p class="forgot-password text-left mt-2 mb-4">
                            <router-link to="/login"
                              >Already have an account?Sign In</router-link
                            >
                          </p>
                        </div>
                        <div class="col-6"></div>
                      </div>
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
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmpassword: "",
      flagdisable: true,
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
        name: "user",
        email: "",
        age: 23,
        mobile: 99999,
        gender: 0,
        password: "user",
      },
      driver: {
        name: "driver",
        email: "",
        age: 23,
        mobile: 1111,
        gender: 1,
        autonumber: "KL-XX-XXXX",
        password: "driver",
      },
      image: "@/assets/img/car1.jpg",
    };
  },
  methods: {
    pwdValidation() {
      if (
        this.confirmpassword != "" &&
        this.password != "" &&
        this.confirmpassword == this.password
      ) {
        this.flagdisable = false;
      } else {
        this.flagdisable = true;
      }
    },
    registerUser() {
      if (this.user.name == "user" && this.user.password == "user") {
        this.$store.state.storeUsers.personaType = "user";
        alert(" User Added Successfuly");

        this.$router.push("components");
      } else {
        alert("Invalid  User !!");
      }
    },
    registerDriver() {
      if (this.driver.name == "driver" && this.driver.password == "driver") {
        this.$store.state.storeUsers.personaType = "driver";
        alert(" Driver Added Successfuly");

        this.$router.push("driverpage");
      } else {
        alert("Invalid  User !!");
      }
    },
    driverOption() {
      if (this.selected == "driver") {
        this.enterAutoDiv = true;
      }
    },
  },
  watch: {
    confirmpassword: "pwdValidation",
    // selected:"driverOption"
  },
};
</script>

