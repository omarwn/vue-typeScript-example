<template src="./hello.html"></template>

<style lang="scss" scoped src="./hello.scss"></style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloComponent extends Vue {
    @Prop() book : any
    constructor() {
        super();
    }

    mounted() { }
}
</script>
