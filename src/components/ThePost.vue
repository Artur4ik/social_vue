<script lang="ts">
import { defineComponent } from 'vue'
import type FeedItem from '@/types/FeedItem';

export default defineComponent({
  data () {
    const isImageLoaded: Boolean = false;
    return {
      isImageLoaded
    }
  },
})
</script>

<script setup lang="ts">
import ThePostSkeleton from './ThePostSkeleton.vue'
import TheLikeButton from './TheLikeButton.vue';

defineProps<{
  post: FeedItem
}>()
</script>

<template>
  <div v-show="isImageLoaded" class="post">
    <div class="card">
      <div class="card-title">
        <div class="user-name">
          <RouterLink class="user-name-link" :to="`/user/${post.user.name}`">
          <img class="rounded-circle user-avatar" :src="post.user.avatar" alt="">
          {{ post.user.name }}
          </RouterLink>
        </div>
        <div v-if="post.location" class="post-location">
          <img src="../assets/location.svg" alt="">
          {{ post.location }}
        </div>
      </div>
      <img class="card-image" :src="post.image" alt="" @load="isImageLoaded = true">
      <div class="card-panel">
        <TheLikeButton class="like-button" :isLiked="post.likes.liked" :post_id="post.id" />
        <div class="like-count-block">
          <span :class="{ 'like-count-text': post.likes.liked }">{{ post.likes.count }}</span>
        </div>
      </div>
      <div class="card-content">
        <div class="">
          <RouterLink class="user-name-link" :to="`/user/${post.user.name}`">@{{ post.user.name }}</RouterLink> {{ post.description }}
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
  </div>

  <ThePostSkeleton v-if="!isImageLoaded" />
</template>

<style scoped>
.like-count-text {
  color: #E2264D;
}
.like-count-block {
  line-height: 50px;
}
.card-panel {
  display: flex;
}
.like-button {
  display: block;
}
.card-title {
  display: flex;
  padding: 10px;
  margin-bottom: 0;
  justify-content: space-between;
}
.user-avatar {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
.user-name-link {
  background: linear-gradient(135deg, #ff4a4a, #3c7aff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.user-name {

}
.post-location {
  line-height: 30px;
  font-size: 10px;
}
.fpo {
    position: relative;
    margin: 25% auto;
    display: block;
}
.pulsate{
  background: linear-gradient(-45deg, #DDDDDD, #F0F0F0, #DDDDDD, #F0F0F0);
	background-size: 400% 400%;
	-webkit-animation: Gradient 2.25s ease infinite;
	-moz-animation: Gradient 2.25s ease infinite;
	animation: Gradient 2.25s ease infinite;
}
.username-skeleton {
  display:block;
  width:271px;
  height:16px;
  color:black;
  margin-left: 15px;
  margin-top: 15px;
}
.block2 {
  width:150px;
  height:8px;
  margin-bottom:8px;
}
.location-skeleton {
  width:150px;
  height:8px;
  margin-left:15px;
  margin-top: 10px;
}
.block3 {
  width:400px;
  height:30px;
  margin-bottom:16px;
}
.circle {
  width:28px;
  height:28px;
  border-radius:50%;
  float:right;
}
.card {
  box-sizing: border-box;
	width: 100%;
  background: #fff;
	position: relative;
	margin:auto;
	top:25%;
  margin-bottom: 10px;
}
.card-image {
  box-sizing: border-box;
  display:block;
  max-width:100%;
}
.card-content {
  clear:both;
  box-sizing: border-box;
  padding: 0px 10px 10px 10px;
  background:#fff;
  margin: 0;
}
@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
</style>
