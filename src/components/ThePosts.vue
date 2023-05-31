<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '../stores/auth'
import PostsService from '@/services/PostsService';
import type ResponseData from '@/types/ResponseData';

export default defineComponent({
  data () {
    const isAuthentificated = useAuthStore().isAuthentificated;
    const posts: Object[] = [];
    return {
      isAuthentificated, posts
    }
  },
  mounted() {
    PostsService.fetchPosts()
      .then((response: ResponseData) => {
        this.posts = response.data.data
      })
  },
})
</script>

<script setup lang="ts">
import ThePost from './ThePost.vue';
</script>

<template>
  <div class="posts">
    <ThePost v-for="post in posts" :post="post" />
  </div>
</template>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 1px solid black;
  margin: 0 auto;
}
</style>
