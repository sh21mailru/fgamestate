<template>
    <span class="copyright">&copy; {{ copyright }}</span>
</template>

<script>
export default {
    name: 'Copyright',
    computed: {
    year() {
        const dateToday = new Date();

        return dateToday.getFullYear();
    },
      copyright() {
          return this.year + ' г. ' + this.content.text;
      }
    },
    data: () => ({
        content: {
            text: 'Аналитический центр при Правительстве Российской Федерации'
        }
    })
}
</script>