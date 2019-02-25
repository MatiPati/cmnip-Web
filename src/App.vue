<template>
    <div id="app">
        <navbar/>
        <div class="container py-3">
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
        height: 5px;
        width: 150px;
        background-color: black;
        display: inline-block;
        margin: 0;
    }
</style>
