
<template>
  <li>
    <strong>
      <ContentSlot :use="$slots.title" unwrap="p" />
    </strong>
    <ContentSlot :use="$slots.action" />
    <ContentSlot :use="$slots.result" />
  </li>
</template>
