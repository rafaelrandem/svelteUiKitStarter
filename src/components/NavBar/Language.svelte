<script>
    import { Lang } from '../../rl-classes/Translate'
    import { Global } from '../../rl-classes/Global'
    const languages = [ 'pl' , 'en' , 'fr'];

    let language = new Global('language');
    let currentLang = languages.indexOf(language.value) ;


    function nextLang() {
        currentLang++;
        currentLang >= languages.length ? currentLang = 0 : null
        language._set(languages[currentLang])
        Lang.update(()=>languages[currentLang])
    }
</script>

<div class="container" on:click="{nextLang}">
    <div>{languages[currentLang].toUpperCase()}</div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        text-align: center;
        text-justify: auto;
        /*border: 1px solid red;*/

    }
</style>
