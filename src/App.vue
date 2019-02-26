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
    box-icon{
        &[size=xs] {
            position: relative;
            bottom: -1px;
        }
        &[size=sm]{
            position: relative;
            bottom: -3px;
        }
    }
</style>
