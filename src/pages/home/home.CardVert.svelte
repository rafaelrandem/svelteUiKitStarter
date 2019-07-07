<script>
    export let cards = [];

    $: console.log(cards)
</script>

{#each cards as {title, content, imageUrl}, i}
    <section class="uk-container uk-container-large uk-margin-large-bottom" >

      {#if i%2===0}
          <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" uk-grid>
              <div class="uk-card-media-left uk-cover-container">
                  <img src="{imageUrl}" alt="" uk-cover>
                  <canvas width="600" height="400"></canvas>
              </div>
              <div>
                  <div class="uk-card-body">
                      <h3 class="uk-card-title">{title}</h3>
                      <p>{content}</p>
                  </div>
              </div>
          </div>
      {/if}

      {#if i%2===1}
          <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" uk-grid>
              <div class="uk-flex-last@m uk-card-media-left uk-cover-container">
                  <img src="{imageUrl}" alt="" uk-cover>
                  <canvas width="600" height="400"></canvas>
              </div>
              <div>
                  <div class="uk-card-body">
                      <h3 class="uk-card-title">{title}</h3>
                      <p>{content}</p>
                  </div>
              </div>
          </div>
      {/if}

    </section>
{/each}
<style lang="sass" type="text/sass">


</style>
