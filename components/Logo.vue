<template>
  <div class="VueToNuxtLogo">
    <v-btn @click="inClick">저는... 버튼입니다..</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  methods: {
    inClick() {
      this.$emit('emitClick');
    }
  }
}
</script>

<style>
</style>
