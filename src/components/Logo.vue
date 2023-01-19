<template>
    <div class="logo">
        <img class="logo__img" src="../assets/logo.svg" :alt="content.title">
        <span class="logo__text">{{ content.title }}</span>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    data: () => ({
      content: {
          title: 'Государство - это я'
      }
    })
}
</script>