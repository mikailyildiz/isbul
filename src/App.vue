<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <router-link :to="{name: 'joblist'}" target="_self" class="navbar-brand">İşBul</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link :to="{name:'joblist'}" tag="li" active-class="active" exact>
            <a class="nav-link">İlanlar</a>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container class="mt-5">
      <transition name="fade">
      <router-view></router-view>
      </transition>
    </b-container>
  </div>
</template>

<script>
</script>

<style>
</style>
