<script>
    export let cards = [];

    $: console.log(cards)
</script>

<div id="cards" class="uk-container uk-container-large uk-padding">
    <div class="uk-child-width-1-3@m uk-grid-match" uk-grid>

        {#each cards as {title , content, imageUrl}}
            <div class="card" >
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top" >
                        <div class="image" data-src="{imageUrl || 'assets/waterfalls.jpg'} "  alt="" uk-img></div>
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">{title}</h3>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        {/each}

    </div>

</div>

<style lang="sass" type="text/sass">
    #cards
        /*border: 1px solid red*/
        .card
            min-width: 400px
            width:  400px
            /*max-width: 500px*/
            margin: 1rem auto 2rem
        .uk-card
            .image
                background-size: cover
                background-position: center
                height: 250px
                min-height: 100%

</style>
