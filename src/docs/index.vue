<style lang="scss" scoped>
@import '../scss/functions.scss';
@import '../scss/color.scss';

$identity-width: 3rem;
$bottombar-height: 10rem;
$header-height: 13rem;

$index:
identity,
icons,
frame;

main {
    background-color: $smokewhite;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    overflow: scroll;
}

.copySuccess {
    padding: 2rem 0;
    background-color: $primary-color;
    color: $white;
    text-align: center;
    z-index: 3;
}

.flx-fill {
    flex: 1;
}

.icons {
    padding: 13rem 2rem $bottombar-height 4rem;
    font-size: 18px;
    z-index: z($index, 'icons');
    position: relative;

    &-list {
        display: flex;
        flex-wrap: wrap;
        padding-top: 1rem;

        &-icon {
            z-index: 1;

            &:hover {
                z-index: 2;
            }
        }
    }
}

.identity {
    position: fixed;
    display: flex;
    justify-content: space-around;
    background-color: white;
    width: $identity-width;
    top: 0;
    bottom: 0;
    z-index: z($index, 'identity');
}

.header {
    background-color: $smokewhite;
    position: fixed;
    width: calc(100% - #{$identity-width});
    height: $header-height;
    left: $identity-width;
    padding: 2rem;
    padding-bottom: 0;
    z-index: z($index, 'frame');

    &-inputClear {
        color: #ccc;

        &:hover {
            color: #777;
        }
    }

    &-headers {
        margin-top: 1rem;
        align-items: center;

        &-search {
            position: sticky;
            display: block;
            top: 0;
            width: 100%;
            font-size: 1em;
            margin: 1em 0;
            padding: .75em;
            outline: none;
            background-color: white;
            border: none;
        }

        &-slider {
            padding: 0 2rem;

            &-label {
                transform: translate(2rem, -1rem)
            }
        }

        &-sizedisplay {

        }
    }
}

.bottombar {
    position: fixed;
    height: $bottombar-height;
    width: calc(100% - #{$identity-width});
    left: $identity-width;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    z-index: z($index, 'frame');
}

#logo {
    width: 10rem;
}

.madeBy {
    color: #51605B;
}

</style>

<template>
    <main>
        <div class="identity">
            <identity></identity>
        </div>
        <div class="header">
            <h1><img id="logo" alt="Moongoose" src="/moon_goose_logo.svg" /> <span class="is-hidden">Moongoose</span></h1>
            <small class="madeBy">made by Workstorm &copy;</small>
            <div class="flx header-headers">
                <div class="origin flx-fill">
                    <input class="header-headers-search" v-model="filter" :placeholder="placeholder"/>
                    <button v-show="filter" class="header-inputClear abs--center-right a1" @click="clearSearch"><moongoose name="close"></moongoose></button>
                </div>

                <div class="flx origin">
                    <small class="header-headers-slider-label abs--top-left">Preview Size</small>
                    <slider class="header-headers-slider" v-model="iconSize"></slider>
                    <p class="header-headers-sizedisplay">{{iconSize}}px</p>
                </div>

            </div>
        </div>
        <div class="icons">
            <ul class="icons-list unstyle">
                <li v-bind:key="icon" class="icons-list-icon" v-for="icon in filteredIcons">
                    <icon @click="setCurrentIcon" @copiedToClipboard="copiedToClipboard" :name="icon" :size="iconSize" :current-icon="currentIcon"/>
                </li>
            </ul>
        </div>
        <bottombar @setCurrentIcon="setCurrentIcon" @copiedToClipboard="copiedToClipboard" :current-icon="currentIcon" :similar="similar" iconSize="24"></bottombar>
        <div v-show="copySuccess" class="copySuccess fxd--top-left fxd--top-right">Icon Code Copied to Clipboard</div>
    </main>
</template>

<script>
import _ from 'lodash';
import Icons from 'Moongoose/icons_all.js';
import Icon from './icon.vue';
import Btn from './btn.vue';
import Bottombar from './bottombar.vue';
import Identity from './identity.vue';
import Meta from './meta.json';
import Slider from './slider.vue';
import Moongoose from '../moongoose.vue';

export default {
    name: 'preview',
    el: '#app',

    components: {
        Icon,
        Btn,
        Bottombar,
        Identity,
        Slider,
        Moongoose
    },

    data: function() {
        return {
            icons: [],
            btn: [],
            filter: '',
            iconSize: '24',
            currentIcon: '',
            similar: [],
            copySuccess: false
        }
    },

    created: function() {
        this.icons = _.keys(Icons);
    },

    computed: {
        filteredIcons: function() {
            var self = this;

            function search(icons, searchString) {
                searchString = searchString.toLowerCase();
                if (searchString === '') {
                    return Object.keys(icons);
                }

                var foundIcons = _.filter(_.keys(icons), function(key) {
                  var search = icons[key].searchTerms;
                  var results = _.filter(search, function(term) {
                      return _.includes(term, searchString);
                  })
                  return (results.length > 0);
                });

                return foundIcons;
            }

            return search(Meta, self.filter);
        },
        placeholder: function () {
            return 'Search all ' + this.icons.length + ' icons...';
        }
    },

    methods: {
        setCurrentIcon: function (iconName) {
            this.similar = Meta[iconName].similar;
            this.currentIcon = iconName;
        },
        clearSearch: function () {
            this.filter = '';
        },
        copiedToClipboard: function () {
            this.copySuccess = true;

            console.log(this.copySuccess)

            setTimeout(() => {
                this.copySuccess = false;
            }, 3000)
        }
    }


}
</script>
