<template>
  <div>
    <Translations />
    
    <h1 id="title">We are against the petition "On banning LGBT+ propaganda in Kazakhstan"</h1>
    <p>The petition violates Kazakhstan’s national legislation and international commitments and should be withdrawn from consideration.</p>
    <p>The decision on the petition will be made at the beginning of August. We don’t have much time left!</p>
    
    <h2 id="history">Background</h2>
    <p>On May 29, 2024, the petition "We oppose open and hidden LGBT propaganda in the Republic of Kazakhstan" appeared on the official portal "E-Petition.kz." In less than two weeks, the petition gathered 50,000 signatures. This number of signatures is required for the petition to be considered at the national level. Currently, the petition is under review by a working group at the Ministry of Culture and Information. A decision on the petition will be made in early August.</p>
    <p>One of the demands of the petition is "the introduction of a law completely prohibiting open and hidden LGBT propaganda in Kazakhstan and punishment for such actions at the legal level."</p>
    <p>According to the Administrative Procedural Code of the Republic of Kazakhstan (Article 90-2, Paragraph 3), petitions that may violate human rights and freedoms are prohibited. The current petition reinforces stigma, violence, and discrimination against LGBTIQA+ individuals in Kazakhstan.</p>
    <p>The prohibition on discrimination, including based on sexual orientation and gender identity, is guaranteed by Article 14(2) of the Constitution: "No one shall be subjected to any discrimination on grounds of origin, social, official, or property status, sex, race, nationality, language, attitude to religion, beliefs, place of residence, or on any other grounds."</p>
    <p>The ban on "propaganda of non-traditional sexual relations" violates Articles 19 (freedom of expression) and 26 (equality before the law) of the International Covenant on Civil and Political Rights, which Kazakhstan has ratified and committed to uphold.</p>
    <p>Currently, there is also a question about the legality of the collected signatures due to the involvement of administrative resources. According to several media reports (<a href="https://orda.kz/rassylali-i-prizyvali-podpisyvat-kto-stoit-za-50-tysjachami-golosov-protiv-lgbt-387860/" target="_blank" rel="noreferrer noopener">link</a>), the signature collection was initiated by a political party (see source at the <a href="https://orda.kz/rassylali-i-prizyvali-podpisyvat-kto-stoit-za-50-tysjachami-golosov-protiv-lgbt-387860/" target="_blank" rel="noreferrer noopener">link</a>). Party representatives sent calls to vote through state institutions (clinics, schools), veteran councils, and volunteer organizations. Subsequently, civil servants and budget employees had to report that they had indeed signed the petition.</p>
    <p>If Kazakhstan adopts a ban on so-called "LGBT propaganda," it will legalize discrimination against LGBTIQA+ people and exacerbate existing violence. This will create an atmosphere of impunity for aggressors and lead to an increase in hate-motivated attacks and violence. Currently, Kazakhstan already experiences a high level of homophobia and transphobia - human rights organizations document hundreds of cases of discrimination and violence across the country annually.</p>
    <p>This ban will restrict freedom of speech and expression and become a tool to suppress any forms of expression related to LGBTIQA+ issues, including education, media, art, and activism. This will lead to the disappearance of LGBTIQA+ voices from public discourse and intensify their isolation. Along with this, issues related to LGBTIQA+ rights, healthcare related to sexual orientation and gender identity, issues of harassment and bullying based on trans* and homophobia, and others will disappear from the public sphere.</p>
    
    <h2 id="help">What can you do?</h2>

    <h3 id="resident">If you are a resident of Kazakhstan</h3>

    <NuxtLink to="/#help" class="petition-link">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
      </svg>
      <span>Read the original article</span>
    </NuxtLink>

    <h3 id="organizations">If you are a foreign citizen, organization, or influencer</h3>
    <p>You can play an important role in supporting the rights of LGBTIQA+ individuals in Kazakhstan and opposing discriminatory initiatives. Here are several ways you can help:</p>
    <ul>
      <li>
        <strong>Support through international human rights organizations.</strong>
        <p>You can reach out to national or international human rights organizations to bring attention to the issue in Kazakhstan.</p>
        <p>These organizations can also apply pressure and organize international campaigns in support of LGBTIQA+ rights.</p>
      </li>
      <li>
        <strong>Public statements</strong>
        <p>You can issue public statements to draw attention to the discriminatory initiative in Kazakhstan.</p>
        <p>This will help create public pressure and increase awareness among the international community.</p>         
      </li>
      <li>
        <strong>Engagement with diplomatic missions</strong>
        <p>You can contact the embassies of your countries in Kazakhstan to convey information about the situation and request their intervention.</p>
        <p>Diplomatic missions can use their channels to express concerns.</p>
      </li>
    </ul>

    <h2 id="sources">Sources</h2>
    <p>The content of this page is based on publications from the AmanBol project (<a href="https://amanbol.kz/appeal2024?utm_source=queer.kz" target="_blank">appeal</a>, <a href="https://amanbol.kz/instructions2024?utm_source=queer.kz" target="_blank">instructions</a>), but is not associated with it.</p>
  </div>
</template>

<script lang="ts" setup>
import ogEn from '~/assets/social/og-en.png'

const title = 'We are against the petition "On banning LGBT+ propaganda in Kazakhstan"'
const description = 'The petition violates Kazakhstan’s national legislation and international commitments and should be withdrawn from consideration.'

const ogUrl = `https://queer.kz${ogEn.replace('https://queer.kz', '')}`;

useHead({
  title,
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://queer.kz/en'
    },
    {
      rel: 'alternate',
      hreflang: 'ru',
      href: 'https://queer.kz/'
    },
    {
      rel: 'alternate',
      hreflang: 'lt',
      href: 'https://queer.kz/lt'
    }
  ],
  meta: [
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: ogUrl,
    },

    // Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:domain',
      content: 'queer.kz',
    },
    {
      property: 'twitter:url',
      content: 'https://queer.kz/en'
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:image',
      content: ogUrl,
    }
  ]
})
</script>
