<script>
    import LangComponent from './Language.svelte'
    import { Lang }from '../../rl-classes/Translate'
    import { Global } from '../../rl-classes/Global'
    import { Theme ,  Color} from '../../rl-classes/Theme'
    const Them = new Theme('rl-dark');

    export let selectedLink;
    export let links = [
        {
            link: 'one',
            name: {
                en: 'Home',
                pl: 'Dom',
                fr: 'Maison'
            }
        },
        {link: 'two' ,
            name: {
                en: 'Blog',
                pl: 'Blog',
                fr: 'Blog'
            }
        },

        {link: 'three' ,
            name: {
                en: 'Theme',
                pl: 'Temat',
                fr: 'Thème'
            }
        },

        {link: 'four' ,
            name: {
                en: 'About',
                pl: 'O nas',
                fr: 'Sur'
            }
        },

        {link: 'five' ,
            name: {
                en: 'Contact',
                pl: 'Kontakt',
                fr: 'Contact'
            }
        },

    ];

    function setLink(event) {
        return () => {
            selectedLink = event;
            new Global('currentPage')._set(selectedLink);
            console.log(selectedLink);
        }
    }

    function changeTheme() {
        let themeTable =  Object.values(Color);
        let themeIndex = themeTable.indexOf(Them.value);
        themeIndex+1 < themeTable.length ? themeIndex+=1 : themeIndex=0
        Them._set(themeTable[themeIndex])

        Them.value = Them.value ;

    }


</script>


<nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">

    <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo uk-margin-left" href="/">
            <img src="assets/rl-logo.svg" alt="RL company logo"  uk-img>
        </a>
    </div>

    <div class="uk-navbar-right uk-visible@s uk-margin-large-right">

        <ul class="uk-navbar-nav">

            {#each links as link}
                <li class:uk-active="{ selectedLink === link.link }" class="link uk-button-text uk-button-default">
                    <a on:click="{ setLink(link.link) }" >{link.name[$Lang]}</a>
                </li>
            {/each}

            <li class="link uk-button-text uk-button-default uk-position-relative" style="min-width: 60px" >
                <a uk-icon="paint-bucket" on:click="{changeTheme}" >
<!--                    <small style="padding-right: 6px"> {Them._get()} </small>-->
                </a>
            </li>

            <li class="link uk-button-text uk-button-default uk-position-relative" style="min-width: 60px" >
                <LangComponent/>
            </li>


        </ul>

    </div>

    <div class="uk-navbar-right uk-hidden@s uk-margin-large-right">
        <a uk-icon="icon: menu ; ratio: 1.5" uk-toggle="target: #flip"></a>
    </div>

    <div id="flip" uk-offcanvas="flip: true; overlay: true">

        <div class="uk-offcanvas-bar uk-flex uk-flex-column uk-background-default uk-box-shadow-medium">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <ul class="uk-nav uk-nav-default uk-margin-auto-vertical">
                {#each links as link}
                    <li class:uk-active="{ selectedLink === link.link }" class="link-mobile uk-button-text">
                        <a on:click="{ setLink(link.link) }" href="#none">{link.name[$Lang]}</a>
                    </li>
                {/each}

                <li class="link-mobile uk-button-text uk-margin-medium-top" style="min-width: 60px" >
                    <a uk-icon="icon: paint-bucket ; ratio: 2.0" on:click="{changeTheme}" >
<!--                    <small style="padding-right: 6px"> {Them._get()} </small>-->
                    </a>
                </li>

                <li class="link-mobile uk-button-text uk-margin-medium-top">
                    <a >
                        <LangComponent style="transform: translateY(50%)" />
                    </a>
                </li>

            </ul>

        </div>
    </div>

</nav>


<style lang="scss" type="text/scss">
    .uk-navbar-container {
        /*background: black !important;*/
        margin: 0;
    }
    .uk-navbar-nav{
        user-select: none;
        -moz-user-select: none;
    }
    .uk-logo {
        max-height: 40px;
        img {
            min-width: calc(400px /(300/80));
            min-height: 100%;
            max-height: 100%;
        }

    }
    .link{
        min-width: 80px;
        text-transform: uppercase;
        /*text-align: center;*/
    }

    .link-mobile {
        text-align: center;
        font-size: 1.5em;
        padding-top: .4rem ;
        padding-bottom: .4rem ;
    }

    #flip {
        user-select: none;
    }

</style>

