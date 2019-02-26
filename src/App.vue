<template>
    <div id="app">
        <navbar/>
        <div class="container py-4">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    export default {
        components: {Navbar}
    }
</script>

<style lang="scss">
    hr{
        height: 4px !important;
        width: 80px !important;
        background-color: black !important;
        display: inline-block !important;
        margin: 0 !important;
    }
</style>
