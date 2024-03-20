<template>
  <main :class="$style.container">
    <img
      src="~/assets/banner.png"
      :class="[$style.banner, $style.block]"
      alt=""
    />
    <article :class="$style.playlist">
      <div
        v-for="(item, index) in items"
        :key="index"
        :style="{ '--color': item.color }"
        :class="[$style.playlistItem, $style.block]"
      >
        <iframe
          :src="item.link"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          @load="onload"
        />
      </div>
    </article>
  </main>
</template>

<script setup>
const items = [
  {
    color: 'rgb(40, 40, 40)',
    link: 'https://open.spotify.com/embed/track/4FtJwsyAWlfikS8dpZdXt2?utm_source=generator&theme=0',
  },
  {
    color: 'rgb(131, 119, 48)',
    link: 'https://open.spotify.com/embed/track/3kKGvwXb4BYLl6haL35VE4?utm_source=generator'
  },
  {
    color: 'rgb(24, 48, 192)',
    link: 'https://open.spotify.com/embed/track/4ZBe9Plh2adT70U4PDxve1?utm_source=generator',
  }
];

const onload = (event) => {
  if (process.client) {
    const target = event.target;
    setTimeout(() => {
      target.style.opacity = 1;
    }, 700);
  }
};
</script>

<style module lang="scss">
:root {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background: #fff;
  user-select: none;
}

.block {
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  max-width: 1024px;
  padding: 24px;
  margin: 0 auto;
  gap: 24px;
}

.banner {
  width: 36%;
  object-fit: cover;
  flex: 1;
  background-color: #6da4b1;
  pointer-events: none;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .banner {
    width: 100%;
    height: 152px;
    flex: none;
    object-position: right 26%;
  }
}

.playlist {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.playlistItem {
  width: 100%;
  height: 152px;
  overflow: hidden;
  background-color: var(--color);

  & > iframe {
    width: 100%;
    height: 152px;
    border: none;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }
}
</style>
