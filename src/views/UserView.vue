<script setup lang="ts">

</script>

<script lang="ts">
import { defineComponent } from 'vue'
import type User from '@/types/User';
import ProfileService from '@/services/ProfileService';
import TheUserProfileInfo from '@/components/TheUserProfileInfo.vue';
import TheUserProfilePosts from '@/components/TheUserProfilePosts.vue'
import TheUserProfileInfoSkeleton from '@/components/TheUserProfileInfoSkeleton.vue'

export default defineComponent({
    data() {
        const user: User = {};
        return {
            user
        };
    },
    mounted() {
        ProfileService.fetch(this.$route.params.name)
            .then((response) => {
            this.user = {
                avatar: response.data.user.avatar,
                name: response.data.user.name,
                country: response.data.user.country,
                city: response.data.user.city,
                sex: response.data.user.sex,
                birthdate: response.data.user.birthdate,
                posts: response.data.posts,
                bio: response.data.user.bio,
            };
        });
    },
    methods: {},
    components: { TheUserProfileInfo, TheUserProfilePosts, TheUserProfileInfoSkeleton }
})
</script>

<template>
  <div class="user">
    <TheUserProfileInfo class="user-block" v-if="user.name" :user="user" />
    <TheUserProfileInfoSkeleton v-else />
    <TheUserProfilePosts class="user-posts" v-if="user.posts" :user="user" />
  </div>
</template>

<style scoped>
.user {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
}

.user-block {
  margin-bottom: 20px;
}

.user-posts {
  padding: 10px;
}
</style>
