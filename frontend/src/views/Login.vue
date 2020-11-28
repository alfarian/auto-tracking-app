<template>
  <div class="vue-tempalte">
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
                          v-model="selected"
                          :options="options"
                          plain
                          name="plain-inline"
                        ></b-form-radio-group>
                      </b-form-group>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      v-model="email"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      v-model="password"
                      @keyup.enter="validateUseruser"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <b-button
                    variant="info"
                    type="submit"
                    @click="validateUseruser"
                    class="btn btn-dark btn-lg btn-block"
                  >
                    Sign In
                  </b-button>
                  <div class="row">
                    <div class="col-6">
                      <p class="forgot-password text-left mt-2 mb-4">
                        <router-link to="/register-user"
                          >Register New User</router-link
                        >
                      </p>
                    </div>
                    <div class="col-6">
                      <p class="forgot-password text-right mt-2 mb-4">
                        <router-link to="/forgot-password"
                          >Forgot password ?</router-link
                        >
                      </p>
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
      selected: "user",
      options: [
        { text: "Passenger", value: "user" },
        { text: "Driver", value: "driver" },
      ],
    };
  },
  methods: {
    validateUseruser() {
      if (
        this.email == "driver" &&
        this.password == "driver" &&
        this.selected == "driver"
      ) {
        this.$store.state.storeUsers.personaType = "driver";
        this.$router.push("driverpage");
      } else if (
        this.email == "user" &&
        this.password == "user" &&
        this.selected == "user"
      ) {
        this.$store.state.storeUsers.personaType = "user";
        this.$router.push("components");
      }
    },
    validateUseruser1() {
      if (
        this.email == "user" &&
        this.password == "user" &&
        this.selected == "driver"
      ) {
        this.$store.state.storeUsers.personaType = "user";
        this.$router.push("components");
      } else {
        alert("Invalid  User !!");
      }
    },
  },
};
</script>

