<template>
  <div :class="$style.container">
    <button :class="$style.button" :style="{
      color: props.color,
      backgroundColor: props.color + '0b',
    }">
      <div :class="$style.inner">
        <!-- Icon -->
        <slot name="icon" />

        <!-- Title -->
        <span :class="$style.title">
          <slot name="title" />
        </span>
      </div>
    </button>

    <div :class="$style.description" @click.stop>
      <slot name="description" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    color: {
      type: String,
      required: true,
    },
  });
</script>


<style lang="scss" module>
  .container {
    display: flex;
    gap: 24px;

    @media (max-width: 948px) {
      flex-direction: column;
      gap: 2px;
      margin-bottom: 20px;
    }
  }

  .description {
    font-size: 1rem;
    max-width: 440px;
    p {
      margin-bottom: 0;
    }
  }

  .button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 12px;
    margin: 0;
    min-width: 180px;
    max-width: 180px;
    border-radius: 8px;

    @media (max-width: 948px) {
      min-width: 100%;
      max-width: 100%;
      padding: 24px 12px;
    }

    svg {
      width: 42px;
      height: 42px;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    user-select: none;
  }

  .title {
    font-size: 1rem;
    font-weight: 500;
  }
</style>
