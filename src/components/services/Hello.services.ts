export class HelloService {

    constructor() {
        
    }

    sumArray([...item]){
        let sum = 0
        item.forEach(e=>{
            sum += e
        })
        return sum
    }
}