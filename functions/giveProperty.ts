import createAnObject from "./convertNameObj";
import getRandomName from "../data/names";
import getFullName from '../data/fullName'
import { Pagination, ascendent, descendant, getNumberInInterval, getSimpleNumber } from '../data/number'
import getText, { Sizes } from "../data/text";
import { generateId, getRandomMovie } from "../data/extraTypes";
import getArrayFrom from "../data/array";
import getObject from "../data/object";
import getImage from "../data/imgs";
//recebe as props de cada key dentro de 'fields'


async function givePropertyStrings(type:string) {
    if(type == 'name') return getRandomName()

    if(type == 'fullName') return getFullName()

    if(type.includes('text')) {
        const size:any = Number(type.split('_')[1])

        return getText(size)
    }

    if(type == 'id') return generateId()

    if(type == 'movie') return getRandomMovie()

    if(type == 'number') return getSimpleNumber()//para o array

    if(type == 'image') {
        const res = await getImage()
        return res
    }
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
function givePropertyArrays(infosArray: string[]) {
    return getArrayFrom(infosArray)
}


async function selectAndGiveType(field: any, pagination: Pagination, times: number){
    try {
        if(typeof field == 'string') {
            const res = await givePropertyStrings(field)
            return res
        } 
    
        if(typeof field == 'object') {
            if(field.type == 'number' || field.type == "asc" || field.type == "desc") {
                return givePropertyNumbers(pagination, field, times)
            }
    
            if(field.type == 'array') {
                return givePropertyArrays(field.fields)
            }
    
            if(field.type == 'object') {
                return getObject(field.fields, pagination, times)
            }
    
        }
    } catch(e) {
        throw e
    }

    // return 'Invalid type'
}
//teste
const oneField = {
    type: 'object',
    fields: {
        nhe: 'name',
        idade: {
            type: 'number',
            range: [1, 123]
        }
    }
}

const pagination = {
    page: 1,
    pageSize: 20,
    totalPages: 3
}

// console.log(selectAndGiveType(oneField, pagination, 1))



export { givePropertyStrings, givePropertyNumbers, selectAndGiveType/*, givePropertyArrays*/ }
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