<style lang="scss">
    .moongoose {
        display: inline-block;
        height: 1em;
        width: 1em;

        svg {
            display: inline-block;
            stroke-width: 0;
            stroke: currentColor;
            fill: currentColor;
            vertical-align: middle;
            height: 1.2em;
            width: 1em;
        }
    }
</style>

<template>
  <i class="moongoose" v-html="rawHtml"></i>
</template>

<script>
import Icons from './icons_all'

export default {
    name: 'moongoose',
    props: ['name'],

    data: function() {
        var out = { rawHtml: '' };
        return out;
    },

    watch: {
        name: function(newVal, oldVal) {
            this.updateHtml();
        }
    },

    mounted: function() {
        this.updateHtml();
    },

    methods: {
        updateHtml: function() {
            this.rawHtml = Icons[this.name];
        }
    }
}
</script>
