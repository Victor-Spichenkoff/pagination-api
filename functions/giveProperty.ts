import createAnObject from "./convertNameObj";
import getRandomName from "../data/names";
import getFullName from '../data/fullName'
import { Pagination, ascendent, descendant, getNumberInInterval } from '../data/number'
import getText, { Sizes } from "../data/text";
import { generateId, getRandomMovie } from "../data/extraTypes";
//recebe as props de cada key dentro de 'fields'

type acceptedEntries = 'string' | 'object'

function givePropertyStrings(type:string) {
    if(type == 'name') return getRandomName()

    if(type == 'fullName') return getFullName()

    if(type.includes('text')) {
        const size:any = Number(type.split('_')[1])

        return getText(size)
    }

    if(type == 'id') return generateId()

    if(type == 'movie') return getRandomMovie()
}


//numeros
interface NumberConfig {
    type: string
    range: number[]

}

function givePropertyNumbers(pagination: Pagination, config: NumberConfig, times:number) {
    if(config.type=='number') {
        return getNumberInInterval(config.range)
    }

    if(config.type == 'asc') {
        return ascendent(pagination, config.range, times)
    }

    if(config.type == 'desc') {
        return descendant(pagination, config.range, times)
    }
}


//array {
// function givePropertyArrays(infosArray: string[]) {
//     infosArray.forEach(type => {
//         if()
//     })
// }


function selectType(field: any, pagination: Pagination, times: number){
    if(typeof field == 'string') {
        return givePropertyStrings(field)
    } 

    if(typeof field == 'object') {
        if(field.type == 'number' || field.type == "asc" || field.type == "desc") {
            return givePropertyNumbers(pagination, field, times)
        }
    }
}
//teste
const config = {
    type: 'desc',
    range: [0, 29]
}

const pagination = {
    page: 1,
    pageSize: 20,
    totalPages: 3
}
console.log(selectType(config, pagination, 1))



export { givePropertyStrings, givePropertyNumbers/*, givePropertyArrays*/ }
//crescente
// const config = {
//     type: 'desc',
//     range: [0, 29]
// }
// const pagination = {
//     page: 1,
//     pageSize: 20,
//     totalPages: 3
// }
// for(let i=0; i<20; i++) {
//     console.log(givePropertyNumbers(pagination, config, i))
// }

// const pagination2 = {
//     page: 2,
//     pageSize: 20,
//     totalPages: 3
// }
// for(let i=0; i<20; i++) {
//     console.log(givePropertyNumbers(pagination2, config, i))
// }