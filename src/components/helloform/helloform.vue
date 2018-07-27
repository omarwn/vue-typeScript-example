<template src="./helloform.html">
    
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HelloFormComponent extends Vue {
    book = ''
    constructor() {
        super();
    }

    mounted() { }
    addBook(book : string){
        if(book){
            this.$emit('addElemenet', book)
            this.book = ''
        }
    }

}
</script>
<style lang="scss" scoped src="./helloform.scss">

</style>

