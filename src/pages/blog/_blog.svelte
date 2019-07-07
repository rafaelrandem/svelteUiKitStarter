<script>
    import {Lang} from '../../rl-classes/Translate'
    import Article from './article.svelte'

    let data ;

    function getText() {
        fetch('./data/'+ $Lang + '.data.json')
                .then(res => res.json())
                .then(json => {
                    // console.log(json);
                    data = json.data;
                })
    }

    $: { getText($Lang) }

</script>


<div class="uk-section">
    <div class="rl-container">
        <div class="uk-width" uk-grid>
            <div class="uk-width-expand">
                <Article data="{{header: data}}" />
            </div>
            <div class="uk-margin-large-top uk-width-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias commodi corporis debitis deserunt dolor ea explicabo facere harum itaque nostrum odio, quidem quo ratione rerum saepe suscipit tenetur voluptatum.
            </div>
        </div>
    </div>
</div>

<style>

</style>


<!--
<div class="uk-container uk-container-small">
    <div class="uk-card uk-card-secondary uk-padding-large">
    {$Lang} {data}
    </div>
    <button class="uk-button uk-button-primary" on:click="{getText}">get</button>
</div>
-->
