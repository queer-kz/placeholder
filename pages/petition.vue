<template>
  <div>
    <h1>Инструкция для подачи Жалобы в Министерство культуры и информации Республики Казахстан</h1>
    <p>Инструкция основана на тексте (<a href="https://amanbol.kz/instructions2024?utm_source=queer.kz" target="_blank">ссылка</a>) статьи правозащитного проекта AmanBol. Для подачи жалобы вы должны быть резидентом РК и иметь ЭЦП (электронную цифровую подпись).</p>

    <!-- Auth -->
    <h2 id="auth">1. Авторизируйтесь на сайте Информационной системы «E-Otinish»</h2>
    <ol>
      <li>Перейдите на сайт Информационной системы «E-Otinish» по ссылке: <a href="https://eotinish.kz/ru" target="_blank" rel="noreferrer noopener">https://eotinish.kz/ru</a>.</li>
      <li>Нажмите кнопку «Войти» в правом верхнем углу. Вас автоматически перенаправит на портал Электронного правительства.</li>
      <li>Пройдите авторизацию на портале Электронного правительства. Доступны три варианта:</li>
      <ul>
        <li>Через QR-код с помощью Egov Mobile.</li>
        <li>Выбор сертификата электронно-цифровой подписи.</li>
        <li>Логин/пароль на портале Электронного правительства.</li>
      </ul>
      <li>После авторизации вас автоматически перенаправит на информационную систему «E-Otinish».</li>      
    </ol>

    <!-- Abuse -->
    <h2 id="file">2. Заполните жалобу</h2>
    <p>Мы подготовили инструмент для быстрого заполнения жалобы, предлагаем вам воспользоваться им. Ознакомиться с текстом жалобы либо заполнить её самостоятельно можно скачав файл «Жалоба» по ссылке на <a href="https://docs.google.com/document/d/18lPHbafuCCOml1Y-1Uba0EY91iMIz_No/edit" rel="noreferrer noopener" target="_blank">Google.Диск</a> или с <a href="https://disk.yandex.ru/i/EHU8oMYppWDvbg" rel="noreferrer noopener" target="_blank">Яндекс.Диск</a>.</p>
    <p v-if="form === 'chose'"><strong>Выберите способ заполнения жалобы:</strong></p>
    <p v-else><strong>Заполните ваши данные для составления жалобы:</strong></p>
    <div :class="$style.form">
      <!-- Chose -->
      <div v-if="form === 'chose'">

        <!-- Generate -->
        <ChoseItem color="#832373" @click="form = 'generate'">
          <template #icon>
            <svg fill="none" viewBox="0 0 24 24">
              <g stroke="#832373" stroke-width="1.5">
                <path d="m18.18 8.03933.4635-.46344c.7678-.76785 2.0128-.76785 2.7806 0 .7679.76785.7679 2.01279 0 2.78061l-.4634.4635m-2.7807-2.78067s.058.98481.9269 1.85376c.869.86891 1.8538.92691 1.8538.92691m-2.7807-2.78067-4.2606 4.26057c-.2886.2886-.4329.4329-.557.592-.1463.1877-.2718.3908-.3742.6056-.0868.1822-.1514.3757-.2804.7629l-.4132 1.2396-.1337.401m8.7998-5.081-4.2606 4.2606c-.2886.2886-.4329.4329-.592.557-.1877.1463-.3908.2718-.6056.3742-.1822.0868-.3757.1514-.7629.2804l-1.2396.4132-.401.1337m0 0-.4011.1337c-.1905.0635-.4006.0139-.5426-.1281s-.1916-.3521-.1281-.5426l.1337-.4011m.9381.9381-.9381-.9381"/>
                <g stroke-linecap="round">
                  <path d="m8 13h2.5"/>
                  <path d="m8 9h6.5"/>
                  <path d="m8 17h1.5"/>
                  <path d="m19.8284 3.17157c-1.1715-1.17157-3.0572-1.17157-6.8284-1.17157h-2c-3.77124 0-5.65685 0-6.82843 1.17157-1.17157 1.17158-1.17157 3.05719-1.17157 6.82843v4c0 3.7712 0 5.6569 1.17157 6.8284 1.17158 1.1716 3.05719 1.1716 6.82843 1.1716h2c3.7712 0 5.6569 0 6.8284-1.1716.9431-.9431 1.127-2.3488 1.1629-4.8284"/>
                </g>
              </g>
            </svg>
          </template>

          <template #title>
            Заполнить на сайте
          </template>

          <template #description>
            <p>Вся работа с вашими данными осуществляется исключительно в браузере. Мы не сохраняем, не обрабатываем и не передаем ваши данные третим лицам. Вы можете убедиться в этом ознакомившись с исходным кодом сайта (<a href="https://github.com/queer-kz/placeholder/blob/main/components/PetitionForm.vue" rel="noreferrer noopener" target="_blank">Github</a>).</p>
          </template>
        </ChoseItem>

        <br />

        <!-- Download -->
        <ChoseItem color="#1c274c" @click="download">
          <template #icon>
            <svg fill="none" viewBox="0 0 24 24">
              <g stroke="#1c274c" stroke-width="1.5">
                <path d="m12 7v7m0 0 3-3m-3 3-3-3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="m16 17h-4-4" stroke-linecap="round"/>
                <path d="m2 12c0-4.71405 0-7.07107 1.46447-8.53553 1.46446-1.46447 3.82148-1.46447 8.53553-1.46447 4.714 0 7.0711 0 8.5355 1.46447 1.4645 1.46446 1.4645 3.82148 1.4645 8.53553 0 4.714 0 7.0711-1.4645 8.5355-1.4644 1.4645-3.8215 1.4645-8.5355 1.4645-4.71405 0-7.07107 0-8.53553-1.4645-1.46447-1.4644-1.46447-3.8215-1.46447-8.5355z"/>
              </g>
            </svg>
          </template>

          <template #title>
            Заполнить самостоятельно
          </template>

          <template #description>
            <p>Вам потребуется самостоятельно заполнить ваши данные - ФИО, ИИН, адрес, контакты, дату подачи жалобы, по возможности подпись. Сохраните файл (важно, что бы файл оставался в формате .docx), он понадобится в следующем шаге.</p>
          </template>
        </ChoseItem>
      </div>

      <!-- Generate -->
      <div :class="{ [$style.hide]: form !== 'generate' }">
        <PetitionForm />
      </div>
    </div>


    <!-- Fill -->
    <h2 id="fill">3. Заполните форму обращения</h2>
    <ol>
      <li>На главной странице нажмите «Подать обращение».</li>
      <li>В графе «Вид кодекса» выберите «Административный процедурно-процессуальный кодекс».</li>
      <li>В графе «Тип обращения» выберите «Жалоба».</li>
      <li>В графе «Выберите государственный орган, в который направляется ваше обращение» выберите Министерство культуры и информации Республики Казахстан.</li>
      <li>В графе «Наименование органа и должностного лица, чьи административный акт, действие (бездействие) оспариваются» выберите Министерство культуры и информации Республики Казахстан.</li>
      <li>В графе «Жалоба подается на» выберите «Административное действие (бездействие), не связанное с принятием административного акта».</li>
      <li>
        В графе «Описание» добавьте этот текст:
        <div :class="$style.reason" @click="copy(reason)">
          <span v-if="copied" :class="$style.reasonCopied">✅ Скопировано</span>
          <div>{{ reason }}</div>
        </div>
      </li>
      <li>В графе «Файлы» прикрепите жалобу, указав путь к сохраненному ранее файлу Жалоба.</li>
      <li>В графе «Фактический адрес» укажите вашу область, населенный пункт, улицу, дом, подъезд и квартиру фактического проживания.</li>
      <li>Укажите язык получения СМС.</li>
    </ol>

    <!-- Submit -->
    <h2 id="submit">4. Отправьте обращение</h2>
    <ol>
      <li>Отметьте пункты о согласии на сбор и обработку ваших персональных данных и согласии с политикой конфиденциальности.</li>
      <li>Нажмите на кнопку «Подписать и отправить».</li>
      <li>Подпишите заявление одним из способов, которым вы авторизовались в системе.</li>
    </ol>

    <p>Ваше заявление подано. Ожидайте поступления СМС с номером обращения. Вы можете отслеживать статус рассмотрения своего обращения в личном кабинете.</p>

    <!-- Contacts -->
    <h2 id="contacts">Возникли сложности?</h2>
    <p>Если у вас возникают вопросы по отправке жалобы, вы можете обратиться к представителям проекта <a href="https://amanbol.kz/?utm_source=queer.kz" target="_blank">AmanBol</a>, написав в Telegram <a href="https://t.me/aziyat_agishev" target="_blank" rel="noreferrer noopener">@aziyat_agishev</a> или Whatsapp <a href="https://wa.me/77051116138" target="_blank" rel="noreferrer noopener">+77051116138</a>.</p>
  </div>
</template>

<script setup lang="ts">
import FileSaver from 'file-saver'
import { useClipboard } from '@vueuse/core'
import ogPetition from '~/assets/social/og-petition.png'

const reason = '09.06.2024 г. на портале «E-Petition.kz» петиция «Мы против открытой и скрытой пропаганды ЛГБТ в РК!» собрала 50 000 подписей. Одним из ее требований - введение закона о запрете открытой и скрытой пропаганды ЛГБТ и наказания за подобные действия на законном уровне. Согласно п. 3 ст. 90-2 Административного процедурно-процессуального кодекса РК, предметом петиции не могут быть вопросы: … которые могут повлечь за собой нарушение прав и свобод человека. Согласно ст. 9 Административного процедурно-процессуального кодекса РК, каждый вправе в порядке, установленном настоящим Кодексом, обратиться в административный орган, к должностному лицу или в суд за защитой нарушенных или оспариваемых прав, свобод или законных интересов. Обращаюсь в уполномоченный государственный орган в отношении рассмотрения петиции «Мы против открытой и скрытой пропаганды ЛГБТ в РК!» с требованием признать данную петицию, нарушающей права и свободы человека, и, следовательно, снять данную петицию с рассмотрения уполномоченным государственным органом. Полный текст с обоснованием жалобы прикрепляю в файле Жалоба'
const { copy, copied } = useClipboard({ source: reason })
const form = ref<'chose' | 'generate'>('chose')

const title = 'Инструкция для подачи Жалобы в Министерство культуры и информации Республики Казахстан — Queer.kz'
const description = 'Пошаговое руководство по заполнению и отправке жалобы на петицию «О запрете пропаганды ЛГБТ+ в Казахстане» через портал «E-Otinish».'

const ogUrl = `https://queer.kz${ogPetition.replace('https://queer.kz', '')}`;


function download() {
  FileSaver.saveAs('/download/Жалоба.docx', 'Жалоба.docx')
}

useHead({
  title,
  htmlAttrs: {
    lang: 'ru'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://queer.kz/petition'
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
      content: 'https://queer.kz/petition'
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

<style>
@import url('@formkit/themes/genesis');
</style>

<style lang="scss" module>
  .reason {
    position: relative;
    overflow: hidden;
    border: 6px solid #d6d6d6;
    border-radius: 12px;
    user-select: all;
    margin: 4px 0;
    font-weight: lighter;

    & > div {
      height: 100px;
      overflow: auto;
      padding: 14px;
      border-radius: 12px;
    }

    &::before, &::after {
      position: absolute;
      left: 0;
      right: 0;
      content: '';
      height: 24px;
      background: linear-gradient(var(--angle), rgba(0, 0, 0, 0) 0%, #fff 80%);
      pointer-events: none;
    }

    &::before {
      --angle: 180deg;
      bottom: -2px;
    }

    &::after {
      --angle: 0deg;
      top: -2px;
    }
  }

  .form {
    display: block;
    border: 6px solid #d6d6d6;
    border-radius: 12px;
    padding: 14px;
  }

  .reasonCopied {
    user-select: none;
    position: absolute;
    inset: 0 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(4px);
    font-weight: 500;
    font-size: 1.2rem;
    pointer-events: none;
  }

  .hide {
    display: none !important;
  }
</style>
