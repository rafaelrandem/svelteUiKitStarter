<script>
    import HomeHeader from '../home/home.header.svelte'
    import Input from '../../rl-frame/Input.svelte'
    import { Global } from '../../rl-classes/Global'


</script>

<!--{@debug Lang}-->
<!--<HomeHeader/>-->

<div class="rl-container">
    <section class="uk-margin-medium-top">
        <button type="button" class="uk-button uk-button-default">default</button>
        <button type="button" class="uk-button uk-button-primary">primary</button>
        <button type="button" class="uk-button uk-button-secondary">secondary</button>
        <button type="button" class="uk-button uk-button-danger">danger</button>
    </section>

    <section class="uk-margin-medium-top">
        <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Default</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">
                    <h3 class="uk-card-title">Primary</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-secondary uk-card-body">
                    <h3 class="uk-card-title">Secondary</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>
</div>
