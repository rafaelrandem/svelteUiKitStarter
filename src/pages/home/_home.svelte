<script>
    import {Lang} from "./../../rl-classes/Translate"
    // sections
    import HeaderSection from './home.header.svelte'
    import CardsSection from './home.cards.svelte'
    import CardsVertSection from './home.CardVert.svelte'

    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iusto nam nesciunt tenetur veritatis? Amet atque consequuntur, cupiditate dicta eveniet harum id ipsam iste laborum magni molestiae numquam quidem tenetur.';

    let headerDataJson;
    let cardsDataJson ;
    let cardsVertDataJson ;

    function getData() {
        fetch('./data/home/pl.home.json')
                .then(res=>res.json())
                .then(json=>{
                    headerDataJson = json.header ;
                    cardsDataJson = json.cards ;
                    cardsVertDataJson = json.cards2 ;
                    console.log(headerDataJson , cardsDataJson, cardsVertDataJson)
                })
    }

    $: getData($Lang)

</script>


<!--suppress CssUnknownTarget -->
<style lang="sass" type="text/sass" >

</style>

<HeaderSection {...headerDataJson} />

<div class="uk-container">
    <CardsSection cards="{cardsDataJson}"/>
    <CardsVertSection cards="{cardsVertDataJson}"/>
</div>


<section class="uk-section">
    <div class="uk-container uk-container-small">
        <div class="uk-grid uk-grid-large" uk-grid>
            <div class="col uk-width-1-1 uk-width-1-2@s">{lorem + lorem}</div>
            <div class="col uk-width-1-1 uk-width-1-2@s">{lorem + lorem}</div>
        </div>
    </div>
</section>

