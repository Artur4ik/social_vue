<script setup lang="ts">
import type User from '@/types/User';
import TheUserProfileInfoSkeleton from './TheUserProfileInfoSkeleton.vue';

defineProps<{
  user: User
}>()
</script>

<template>
  <div class="card">
    <div class="user-info">
      <img class="user-avatar rounded-circle" :src="user.avatar" alt="">
      <div class="user-panel">
        <div>
          <RouterLink class="user-name-link" :to="`/user/${user.name}`">{{ user.name }}</RouterLink>
          <img class="sex-image" v-if="user.sex == 'man'" src="../assets/man.png" alt="">
          <img class="sex-image" v-else src="../assets/woman.png" alt="">
        </div>
        <div class="user-location">
          {{ user.country }}, {{ user.city }}
          <img src="../assets/location.svg" alt="">
        </div>
        <div class="user-statistic">
          <div class="user-statistic-item">
            <span><b>{{ user.posts.count }}</b> posts</span>
          </div>
          <div class="user-statistic-item">
            <span><b>0</b> followed</span>
          </div>
          <div class="user-statistic-item">
            <span><b>0</b> followers</span>
          </div>
        </div>
      </div>
    </div>
    <div class="user-bio">
      {{ user.bio }}
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 10px;
}
.user-bio {
  padding: 0px 15px 15px 15px;
}
.user-statistic-item {
  padding-right: 10px;
}
.user-statistic {
  display: flex;
  font-size: 15px;
}
.user-location {
  font-size: 15px;
}
.sex-image {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}
.user-name-link {
  background: linear-gradient(135deg, #ff4a4a, #3c7aff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.user-info {
  display: flex;
  flex-direction: row;
  padding: 15px;
}
.user-avatar {
  width: 100px;
}
.user-avatar {
  display: block;
}
.user-panel {
  padding: 0 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
