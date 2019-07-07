<script>
    import Navbar from './components/NavBar/navbar.svelte';
    import Footer from './components/Footer/footer.svelte'
    import Home from './pages/home/_home.svelte';
    import Blog from './pages/blog/_blog.svelte';
    import Theme from './pages/Theme/_theme.svelte';
    import About from './pages/about/_about.svelte';
    import Contact from './pages/contact/_contact.svelte';
    import { Global } from "./rl-classes/Global";


    let page = new Global('currentPage', 'one').value;
    let pages = {
        one:    Home,
        two:    Blog,
        three:  Theme,
        four:   About,
        five:   Contact
    };
</script>


<style lang="sass" type="text/sass">
    .content
        /*border: 1px solid red*/
        min-height: calc(100vh - 305px)
</style>

<main>
    <Navbar bind:selectedLink="{page}"/>
    <div class="content">
        <svelte:component this="{pages[page] || Home}" />
    </div>
    <Footer/>
</main>



