<script lang="ts">
  import { fade } from "svelte/transition";
  import { AnalyticsService } from "../../services/analytics-service";
  import { getContext, onMount } from "svelte";
  import { currentCourse } from "../../stores";
  import { getUserId } from "tutors-reader-lib/src/utils/auth-utils";
  import type { User } from "tutors-reader-lib/src/analytics/metrics-types";

  const analytics: AnalyticsService = getContext("analytics");
  let status = false;
  let user: User;

  onMount(async () => {
    user = await $currentCourse.metricsService.fetchUserById(getUserId());
    status = user.onlineStatus === "offline";
  });

  function handleClick() {
    analytics.setOnlineStatus($currentCourse, status);
  }

</script>

<style>
  .card {
    max-width: 150px;
    min-width: 100px;
    height: auto
  }
</style>

{#if user}
  <div
    class="font-light font-sm card m-4 block bg-white border dark:hover:bg-gray-800 dark:border-gray-700 rounded-lg overflow-hidden dark:bg-gray-900 dark:text-white"
    in:fade={{ duration: 800 }}>
    <div class="text-center"> {user.name} </div>
    <hr>
    <div class="flex justify-center">
      <img loading="lazy" class="object-scale-down p-1 h-24" src="{user.picture}" alt="{user.nickname}">
    </div>
    <hr>
    <div class="p-2 text-center text-xs">
      Appear Offline : <input type="checkbox" bind:checked={status} on:click={handleClick}>
    </div>
  </div>
{/if}
