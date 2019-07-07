<script>
    export let url = 'assets/jellyfish.jpg'
</script>

<div class="image" style="background-image: url({url})">
</div>

<style lang="sass" type="text/sass">
    .image
      z-index: 1
      top: 0
      position: absolute
      width: 100%
      height: 100%
      background-position: center
      background-size: cover
</style>
