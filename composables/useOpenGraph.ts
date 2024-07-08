import ogHomeRu from '~/assets/social/og:home:ru.png'
import ogHomeEn from '~/assets/social/og:home:en.png'
import ogHomeLt from '~/assets/social/og:home:lt.png'
import ogPetitionRu from '~/assets/social/og:petition:ru.png'


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

  // Page specific
  switch (page.value.slug) {
    case 'home:ru':
      alternative.push(['en', '/en'], ['lt', '/lt'])
      socialBanner = ogHomeRu
      break;

    case 'home:en':
      alternative.push(['ru', '/ru'], ['lt', '/lt'])
      socialBanner = ogHomeEn
      lang = 'en'
      break;

    case 'home:lt':
      alternative.push(['ru', '/ru'], ['en', '/en'])
      socialBanner = ogHomeLt
      lang = 'lt'
      break;

    case 'petition:ru':
      socialBanner = ogPetitionRu
      break;

    default:
      console.warn('No Open Graph image for this page')
  }

  // URL's
  const canonicalUrl = formatLink(route.path)
  socialBanner = formatLink(socialBanner)

  // Defaults
  page.value.head = {
    ...page.value.head,
    htmlAttrs: {
      ...page.value.head?.htmlAttrs,
      lang: 'ru'
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
      { rel: 'canonical', href: canonicalUrl },
      ...alternative.map(([lang, href]) => ({ rel: 'alternate', hreflang: lang, href: formatLink(href) }))
    ],
    meta: [
      ...(page.value.head?.meta || []),
      // OG: Meta
      { property: 'og:site_name', content: 'Queer.kz' },
      { property: 'og:type', content: 'article' },

      // OG: Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:domain', content: 'Queer.kz' },
      { name: 'twitter:url', content: canonicalUrl },
      { name: 'twitter:title', content: page.value.title },
      { name: 'twitter:description', content: page.value.description },
      { name: 'twitter:image', content: socialBanner },
      { name: 'twitter:image:alt', content: page.value.title },
    ]
  }

  useContentHead(page)
}
