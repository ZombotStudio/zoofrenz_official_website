<template>
  <div v-show="show" class="overlay">
    <div class="dialog">      
      <img src="img/claim/VerifyingModal.png" alt="" class="change-position"/>
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
  transform: translate(-50%, -50%);
  z-index: 1000;
}

</style>
