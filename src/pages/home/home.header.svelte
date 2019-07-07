<script>
    export let title = 'title' ;
    export let content = 'content' ;
    export let button = 'button' ;
</script>

<section class="header-section">
    <div class="uk-height-large uk-background-cover uk-position-relative"
         uk-parallax="bgy: -100; easing: -1">



        <div class="box uk-card uk-card-default uk-padding">
            <h1>
                {title}
            </h1>
            <p>
                {content}
            </p>

            <button type="button" class="uk-button uk-button-primary">{button}</button>

        </div>
    </div>
</section>

<!--suppress CssUnknownTarget -->
<style lang="sass" type="text/sass" >

    @import "../../style/media"

    .header-section
        .uk-background-cover
            background-image: url('assets/color-circle.png')
            background-color: rgba(177, 233, 241, 0.75)
            background-position: top
            background-size: cover
        .uk-height-large
            min-height: 30vw
    .box
        position: absolute
        padding: 2rem
        /*margin: 2rem*/
        bottom: 10%
        right: 15%
        width: 50%
        max-width: 100%
        max-height: 100%
        /*border: 2px solid black*/

        @media #{$xs}
            position: relative
            top: 50%
            left: calc(50% - 4px)
            transform: translateX(-50%) translateY(-50%)
            border-color: red
            width: calc(100% - 32px)
            height: auto


</style>
