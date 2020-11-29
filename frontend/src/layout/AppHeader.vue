<template>
  <header class="header-global">
    <base-nav class=" card navbar-main" transparent type="" effect="light" expand>

      <div class="row shadow" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a
            href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
          >
            <img src="img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
            style="color:black"
          >
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text">Drivers List</span>
          </a>
          <div class="dropdown-menu-inner">
            <a
              href="https://google.com"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-primary rounded-circle text-white"
              >
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Getting started</h6>
              </div>
            </a>
            <a
              href="https://google.com"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-warning rounded-circle text-white"
              >
                <i class="ni ni-ui-04"></i>
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">Drivers list</h5>
              </div>
            </a>
          </div>
        </base-dropdown>
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text" style="color:black">Links</span>
          </a>
          <router-link to="/landing" class="dropdown-item">Tracker</router-link>
          <router-link to="/profile" class="dropdown-item">Profile</router-link>
          <router-link to="/login" class="dropdown-item"
            >Login Driver</router-link
          >
          <router-link to="/register" class="dropdown-item"
            >Register Driver</router-link
          >
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Like us on Facebook"
            style="color:black"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none" style="color:black">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            style="color:black"
            title="Follow us on Instagram"
          >
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            style="color:black"
            title="Follow us on Twitter"
          >
            <i class="fa fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class=" nav-link nav-link-icon"
            href="#/login"
            target="_blank"
            style="color:red;font-size:35px ;margin:0px"
            rel="noopener"
            data-toggle="tooltip"
            title="Log Out"
          >
            <i class="fa fa-power-off"></i>
            <span class="nav-link-inner--text d-lg-none">Log Out</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {

  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
};
</script>
<style>
</style>
