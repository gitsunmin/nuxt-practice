<template>
  <div class="VueToNuxtLogo">
    <v-btn @click="onClick">Logo라는 버튼 {{ name }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    name: {
      type: String,
      default: () => 'sitmin',
    },
  },
  methods: {
    onClick() {
      this.$emit('emitClick');
    }
  }
}
</script>

<style>
</style>
