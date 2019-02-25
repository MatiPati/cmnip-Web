<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">Check My Name in Poland</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Repos
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a href="https://github.com/MatiPati/cmnip-web" target="_blank" class="dropdown-item d-flex">
                                    Web repo <box-icon type="logo" name="github" size="sm" class="ml-1"></box-icon>
                                </a>
                                <a href="https://github.com/MatiPati/cmnip-api" target="_blank" class="dropdown-item d-flex">
                                    API repo <box-icon type="logo" name="github" size="sm" class="ml-1"></box-icon>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="nav-fix"></div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style lang="scss">
    .navbar {
        position: fixed !important;
        top: 0;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        z-index: 10000;

        .navbar-brand{
            @media screen and (max-width: 362px) {
                font-size: 0.8rem;
            }
        }

        .dropdown-item{
            justify-content: flex-end;
            @media screen and (max-width: 992px) {
                justify-content: unset;
            }
        }
    }
    #nav-fix{
        height: 60px;
    }
</style>