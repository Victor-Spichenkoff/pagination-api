<code>
entrada: {
    pagination: {
        page: 1,
        pageSize: 10,
        totalPages: x;(para o user definir)
    }
    fields: {
        nome_arg: 'tipo(definidos)' || {}


        nome: 'name',
        texthinho: text_1
        idade: {
            type: number | asc | desc
            range: []
            
        }
        array: {
            type: 'array',
            fields: [name, number, (definidos)...]
        },
        object: {
            type: 'object'
            fields: [name: (defindios)]//não vou deixar mudar esse campo
        }  
    }
}

tipos: {
    name
fullName
text 1-5
id
movie

number colocar um array diretamnet
ou type: {
number}


}
</code>

//fazer a parte de array e objeto