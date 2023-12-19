// nhe: name
//nhe:'Victor'
const nomes: string[] = ['Victor', 'Emma']


const arraFinal:any = []
//get infos
const req:any = {
    nhe: 'name',
    idade: {
        type: 'number',
        range: [1, 123]
    }

}

function getRandomNumber(array: any[]) {
    return Math.floor(Math.random() * array.length)
}

function getKeysFromReq(obj: object): string[] {
    return Object.keys(obj)
}


const keys = getKeysFromReq(req)



function createAnObject(array: any[], keys: string[], ) {
    const finalObj: any = {}
    const randomNumber = getRandomNumber(nomes)

    keys.forEach((key, i )=> {
        finalObj[key] = nomes[randomNumber]
    })

    array.push(finalObj)

    return array
}//modelo: [ { nhe: 'Emma' } ]


console.log(createAnObject([], keys))

export default createAnObject