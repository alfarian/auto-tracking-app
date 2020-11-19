<template>
  <div class="vue-tempalte">
    <section style="background-color:whitesmoke;height:50px" class="shadow">
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
              <b-tab title="USER" active>
                <div class="container">
                  <h3>Sign In</h3>
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
              <b-tab title="DRIVER">
                <div class="container">
                  <h3>Sign In</h3>
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
                      @keyup.enter="validateUserdriver"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <b-button
                    variant="info"
                    type="submit"
                    @click="validateUserdriver"
                    class="btn btn-warning btn-lg btn-block"
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
    };
  },
  methods: {
    validateUserdriver() {
      if (this.email == "driver" && this.password == "driver") {
        this.$store.state.storeUsers.personaType = "driver";
        this.$router.push("components");
      } else {
        alert("Invalid User !!");
      }
    },
    validateUseruser() {
      if (this.email == "user" && this.password == "user") {
        this.$store.state.storeUsers.personaType = "user";
        this.$router.push("components");
      } else {
        alert("Invalid  User !!");
      }
    },
  },
};
</script>

