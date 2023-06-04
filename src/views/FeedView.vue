<script setup lang="ts">
import ThePostSkeleton from '@/components/ThePostSkeleton.vue';
import ThePost from '@/components/ThePost.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import FeedService from '@/services/FeedService'
import type FeedItem from '@/types/FeedItem';

export default defineComponent({
  data () {
    const feed: FeedItem[] = [];
    return {
      feed
    }
  },
  mounted() {
    FeedService.fetch()
      .then((response) => {
        response.data.posts.forEach((feedItem: FeedItem) => {
          this.feed.push(
            {
              id: feedItem.id,
              user: feedItem.user,
              likes: feedItem.likes,
              comments: feedItem.comments,
              location: feedItem.location,
              image: feedItem.image,
              description: feedItem.description,
            }
          )
        });
      })
  },
  methods: {
    feedItemsPresent() {
      return this.feed.length == 0 ? false : true;
    },
  },
})
</script>

<template>
  <div class="posts">
    <ThePost v-if="feedItemsPresent()"
              v-for="post in feed"
              :post="post" />
    <ThePostSkeleton v-else
                      v-for="i in [1,2,3,4,5]"/>
  </div>
</template>

<style scoped>
h1 {
  margin: 0;
}
.posts {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 10px auto;
}

@media screen and (max-width: 1200px) {
  .posts {
    margin-left: 250px;
  }
}
</style>
