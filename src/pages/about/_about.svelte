<script>
    import {ArticleSchema} from "../blog/article.schema";

    let _test =  new ArticleSchema({header: 'header'})
    console.log(_test)
</script>

<div class="uk-section rl-container">
    { _test.header }
</div>

<style>

</style>
