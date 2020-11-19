<template>
  <div class="vue-tempalte">
    <div>
      <b-navbar toggleable="lg" class="border">
        <b-navbar-brand href="#">WELCOME TO AUTO APP</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          

          <b-navbar-nav class="ml-auto">
           
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <br /><br />
    <br /><br />

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
                      class="form-control form-control-lg"
                    />
                  </div>
                  <div class="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      v-model="confirmpassword"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <b-button
                    :disabled="flagdisable"
                    variant="info"
                    type="submit"
                    @click="registerUserAdmin"
                    class="btn btn-warning btn-lg btn-block"
                  >
                    Create Account
                  </b-button>
                  <div class="row">
                    <div class="col-6">
                      <p class="forgot-password text-left mt-2 mb-4">
                        <router-link to="/login">Already have an account?Sign In</router-link>
                      </p>
                    </div>
                    <div class="col-6">
                      
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
        { text: "Driver", value: "driver", disabled: true },
      ],
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
    registerUserAdmin() {
      if (this.email == "user" && this.password == "user") {
        this.$store.state.storeUsers.personaType = "user";
        alert(" User Added Successfuly");

        this.$router.push("components");
      } else {
        alert("Invalid  User !!");
      }
    },
    
  },
  watch: {
    confirmpassword: "pwdValidation",
  },
};
</script>

