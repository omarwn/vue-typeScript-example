<template src="./HelloWorld.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloComponent from './hello/hello.vue'
import HelloFormComponent from './helloform/helloform.vue'
import { HelloService } from './services/Hello.services'
import {Book} from './services/bookobj'
@Component({
  components : {
    HelloComponent,
    HelloFormComponent
  }
})
export default class HelloWorld extends Vue {
  booklist : Book[] = []
  hello = new HelloService()
  @Prop() private msg!: string;

  sum = this.hello.sumArray([1,3,4,6,7,8])
  addbook(event : string){
    this.booklist.unshift(new Book( event ,  0))
  }
  deleted(i:number){
    this.booklist.splice(i,1)
  }
  voitCount(event : number, index : number){
    if(this.booklist[index].voit > 0  ){
      this.booklist[index].voit += Number(event)
    }else if(this.booklist[index].voit == 0 && Number(event) > 0){
      this.booklist[index].voit += Number(event)
    }else{
      alert('لا يوجد اعجابات لتلغيها')
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./HelloWorld.scss"></style>
