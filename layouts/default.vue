<template>
  <div>
    <Navbar></Navbar>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default {
  components: { Footer, Navbar }
};
</script>

<style></style>
