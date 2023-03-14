<template>
  <div v-show="show" class="overlay">
    <div class="image-container">
    <img src="img/claim/VerifyingModal.png" alt="your-image-description">
    <div class="text-overlay">
      <p>YOUR DOWNLOAD WILL BEGIN SHORTLY... </p>
    </div>
  <!-- </div>
    <div class="dialog">      
      <img src="img/claim/VerifyingModal.png" alt="" class="change-position"/> -->
      <!-- YOUR DOWNLOAD WILL BEGIN SHORTLY...       -->
    </div>
  </div>
</template>

<script>
export default {
  name: "VerifyingModal",
  props: ["show"],
};
</script>

<style>
@import "../../public/css/style.min.css";
.overlay {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 1000;
}
.change-position {
  position: fixed;
  top: 50%;
  left: 55%;
  max-width: 60%;
  max-height: 60%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
.image-container {  
  position: fixed;
  top: 50%;
  left: 55%;
  max-width: 80%;
  max-height: 80%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.text-overlay {
  /* position: absolute;
  top: 50%;
  left: 33%;
  z-index: 10;
  margin-bottom: calc(24 / var(--media-breakdown));
  font-family: "mini-wakuwaku", sans-serif;
  font-size: calc(38 / var(--media-breakdown));
  text-transform: uppercase;
  color: #746151; */

  position: absolute;
  top: 50%;
  left: 33%;
  transform: translate(-50%, -50%);
  color: #746151; 
  padding: 10px;
  font-family: "mini-wakuwaku", sans-serif;
  font-size: calc(21 / var(--media-breakdown));
  text-transform: uppercase;
  color: #746151;
}

</style>
