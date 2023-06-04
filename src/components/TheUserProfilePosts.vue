<script setup lang="ts">
import type User from '@/types/User';

defineProps<{
  user: User
}>()
</script>

<template>
  <div class="user-posts card">
    <img class="user-posts-item" v-for="post in user.posts.data" :src="post.image" alt="">
  </div>
</template>

<style scoped>
.user-posts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.user-posts-item {
  width: 289px;
  max-height: 289px;
  object-fit: cover;
  padding: 2px;
}
.user-posts-item:hover {
  filter:brightness(1.1);
  cursor: pointer;
}
</style>
