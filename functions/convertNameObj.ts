// nhe: name

import { Pagination } from "../data/number"
import { selectAndGiveType } from "./giveProperty"

//nhe:'Victor'
const nomes: string[] = ['Victor', 'Emma']
const req:any = {
    nhe: 'name',
    idade: {
        type: 'number',
        range: [1, 123]
    }
}

const arraFinal:any = []
//get infos


function getRandomNumber(array: any[]) {
    return Math.floor(Math.random() * array.length)
}

function getKeysFromReq(obj: object): string[] {
    return Object.keys(obj)
}

function getValues(obj: object) {
    return Object.values(obj)
}





async function createAnObject(array: any[], fields: object, pagination: Pagination, index: number): Promise<any[]> {
    //array final(com tudo) // campos com valor e chave
    try{
        const finalObj: any = {}
        const types = getValues(fields)
    
        const keys = getKeysFromReq(fields)
    
        keys.forEach(async (key, i )=> {
            const res = await selectAndGiveType(types[i], pagination, index)
            finalObj[key] = res
        })
    
        array.push(finalObj)
    
        return array
    } catch(e) {
        throw e
    }
}//modelo: [ { nhe: 'Emma' } ]



//testes

const pagination = {
    page: 1,
    pageSize: 20,
    totalPages: 3
}



// console.log(createAnObject([], req, pagination, 1))

export default createAnObject
export { getKeysFromReq, getValues }