<template>
  <v-app style="background: #E3E3EE">
    <!-- Side navbar -->
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-app-bar color="primary" dark flat>
        <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-app-bar>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal navbar -->
    <v-app-bar dense color="primary" dark fixed app>
      <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>

      <!-- App title -->
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Seach input -->
      <v-text-field
        flex
        prepend-icon="mdi-magnify"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Navbar links -->
      <div class="hidden-xs-only">
        <v-btn
          text
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left class="hidden-sm-only">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <main>
      <v-container class="mt-5">
        <transition name="fade">
          <router-view />
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        {
          icon: "mdi-chat",
          title: "Posts",
          link: "/posts"
        },
        {
          icon: "mdi-lock-open",
          title: "Sign In",
          link: "/signin"
        },
        {
          icon: "mdi-pencil",
          title: "Sign Up",
          link: "/signup"
        }
      ];
    },
    sideNavItems() {
      return [
        {
          icon: "mdi-chat",
          title: "Posts",
          link: "/posts"
        },
        {
          icon: "mdi-lock-open",
          title: "Sign In",
          link: "/signin"
        },
        {
          icon: "mdi-pencil",
          title: "Sign Up",
          link: "/signup"
        }
      ];
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-25px)
}
</style>
