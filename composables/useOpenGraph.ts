import ogHomeRu from '~/assets/social/og:home:ru.png'


export async function useOpenGraph() {
  const page = useCurrentPage();
  const route = useRoute()
  const alternative: Array<[string, string]> = []

  if (!page.value?.slug) {
    return;
  }

  // Defaults
  let socialBanner = ogHomeRu
  let lang = 'ru'

  // URL's
  const canonicalUrl = formatLink(route.path)
  socialBanner = formatLink(socialBanner)

  // Defaults
  useHead({
    ...page.value.head,
    title: page.value.title,
    htmlAttrs: {
      ...page.value.head?.htmlAttrs,
      lang,
    },
    // OG: Image
    image: {
      src: socialBanner,
      width: 1200,
      height: 630,
      type: 'image/png'
    },
    link: [
      ...(page.value.head?.link || []),
      { rel: 'canonical', id: 'canonical', href: canonicalUrl },
      ...alternative.map(([lang, href]) => ({ rel: 'alternate', hreflang: lang, id: lang, href: formatLink(href) }))
    ],
    meta: [
      ...(page.value.head?.meta || []),
      { name: 'description', id: 'description', content: page.value.description },

      // OG: Image
      { property: 'og:image',        id: 'og:image',        content: socialBanner },
      { property: 'og:image:type',   id: 'og:image:type',   content: 'image/png' },
      { property: 'og:image:width',  id: 'og:image:width',  content: '1200' },
      { property: 'og:image:height', id: 'og:image:height', content: '630' },

      // OG: Meta
      { property: 'og:url',         id: 'og:url',         content: canonicalUrl },
      { property: 'og:title',       id: 'og:title',       content: page.value.title },
      { property: 'og:description', id: 'og:description', content: page.value.description },
      { property: 'og:locale',      id: 'og:locale',      content: lang },
      { property: 'og:site_name',   id: 'og:site_name',   content: 'Queer.kz' },
      { property: 'og:type',        id: 'og:type',        content: 'article' },

      // OG: Twitter
      { name: 'twitter:card',        id: 'twitter:card',        content: 'summary_large_image' },
      { name: 'twitter:domain',      id: 'twitter:domain',      content: 'Queer.kz' },
      { name: 'twitter:url',         id: 'twitter:url',         content: canonicalUrl },
      { name: 'twitter:title',       id: 'twitter:title',       content: page.value.title },
      { name: 'twitter:description', id: 'twitter:description', content: page.value.description },
      { name: 'twitter:image',       id: 'twitter:image',       content: socialBanner },
      { name: 'twitter:image:alt',   id: 'twitter:image:alt',   content: page.value.title },
    ]
  })
}
