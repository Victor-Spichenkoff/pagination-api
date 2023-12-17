// nhe: name
//nhe:'Victor'
const nomes: string[] = ['Victor', 'Emma']


const arraFinal:any = []
//get infos
const req:any = {
    nhe: 'name'
}

function getRandomNumber(array: any[]) {
    return Math.floor(Math.random() * array.length)
}

function getKeysFromReq(obj: object): string[] {
    return Object.keys(obj)
}


const keys = getKeysFromReq(req)



function createAnObject(array: any[], keys: string[], arrayIndex?: number) {
    const finalObj: any = {}
    const randomNumber = getRandomNumber(nomes)

    keys.forEach((key, i )=> {
        finalObj[key] = nomes[randomNumber]
    })

    array.push(finalObj)

    return array
}//modelo: [ { nhe: 'Emma' } ]

// arraFinal[0]= {//preciso criar algo primeiro {nhe1}
//     [keys[0]]: nomes[randomNumber]
// }
console.log(createAnObject([], keys))

export {}