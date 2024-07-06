<template>
  <footer :class="$style.container" lang="ru">
    <span :class="$style.copyright">
      Copyright &copy; 2024 Queer.kz. All rights reserved.
    </span>
    <p :class="$style.disclaimer">
      Данный сайт является частной инициативой, направленной против петиции о поражении ЛГБТКИА+ в правах в Казахстане. Данный проект не финансируется ни государственными, ни частными организациями. Все мнения и материалы, представленные на сайте, отражают личную позицию автора и не представляют официальные взгляды каких-либо организаций или учреждений. Цель данного сайта - информировать и призывать к защите прав человека и свобод.
    </p>
  </footer>
</template>

<style lang="scss" module>
  .container {
    padding: 48px 32px;
    text-align: center;
    user-select: none;
  }

  .copyright {
    font-weight: 500;
    color: #777777;
  }

  .disclaimer {
    font-size: 14px;
    color: #777777;
    margin-top: 16px;
  }
</style>
