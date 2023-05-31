<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    post: Object
  },
  methods: {
  },
})
</script>

<script setup lang="ts">

</script>

<template>
  <div class="post">
    <h1>Privet ololo</h1>
    <h4>{{ post!.id }}</h4>
    <h4>{{ post!.description }}</h4>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  width: 600px;
  min-height: 300px;
  border: 1px solid black;
}
</style>
