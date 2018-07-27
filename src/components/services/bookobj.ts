export class Book {
    name : String
    voit : number
    hide : boolean
    constructor(name:String , voit : number){
        this.name = name
        this.voit = voit
        this.hide = true
    }
    toggle(){
        this.hide = !this.hide
    }
}
