<template>
  <div class="breadcrump-wrapper">
    <img src="../../assets/img/home.png" alt="home" />
    <span>Home</span>
  </div>
</template>

<script>
export default {
  name: "breadcrump-component",
};
</script>

<style>
.breadcrump-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}
.breadcrump-wrapper img {
  width: 20px;
}
</style>
