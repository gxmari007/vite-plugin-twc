<template>
  <div class="p-8 box">
    Vue Example
    <span class="a">hello world</span>
  </div>
</template>

<style lang="postcss">
.box {
  & .a {
    font-size: 22px;
  }
}
</style>
