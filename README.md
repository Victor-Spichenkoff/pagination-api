# Pagination test API (Versão em português abaixo)
## Various functions to help perform all pagination
---

Url: [https://pagination-api-ugwo.onrender.com/pagination](https://pagination-api-ugwo.onrender.com/pagination)

## Resources
- Use any name, allowing you to create the entire structure of your project without having to change anything in the final version
- Many types available
- Error handling with clear messages
- Complete structure for pagination
- [Site](https://victor-spichenkoff.github.io/test-pagination) to test everything



<br>

## Documentation (Full example at the end)
The request is made using the **PUT** method and with a configuration object

### Object
#### Field **Pagination**
Field used for page information

Items:
- page -> current page
- pageSize -> how many items per page
- totalPages -> total number of pages
**Example:**
~~~
{
    pagination: {
        Page 1,
        page size: 10,
        total pages: 10
    }
}
~~~

<br>

#### Field '**Fields**'
Field used to inform what data you want to receive. The object's keys can receive any value of your choice, as the values ​​represent the returns

<br>

##### Strings:
- **name** --> Any name
- **fullName** --> First name, middle name (may or may not have it and will just be the abbreviation) and last name
- **text_SIZE** --> Ranges from 1-5. Type 1 provides a proverb, the others text in ascending order
- **movie** --> Name of a movie
- **id** --> An id with 10 letters/numbers
- **image** --> Provide an unsplash image url

Example:
~~~
{
    fields: {
        name: 'name',
        phrase_of_theday: 'text_1',
        image: 'image'
    }
}
~~~

<br>

##### Numbers:
They use an object with the 'type' and the 'range' array, always in ascending order

These are the types available
- **number** --> Returns a number within the given range
- **asc** --> Numbers in ascending order within the given range.
- **Desc** --> Numbers in descending order

Attention: **Asc** and **Desc** depend on the page and pageSize field to provide correct values. Furthermore, when reaching the maximum/minimum value, numbers exactly within the limit will be provided.

Example:
~~~
{
    fields: {
        age: {
            type: 'number',
            range: [0, 123]
        },
        likes: {
            type: 'desc',
            range: [0, 300]
        }
    }
}
~~~

<br>

##### Array
Receives an object with 'type' equal to 'array' and 'fields' with the desired values.

Possible values:
- Name
- fullName
- text_SIZE
- movies
- id
- image
- number (1-100)

Example:
~~~
{
    fields: {
        my_array: {
            type: 'array',
            fields: ['id', 'name', 'number']
        }
    }
}
~~~

<br>


##### Object
Receives an object with 'type' equal to 'object' and 'fields' with the desired values.

You can receive **any value**, including another object;

Example:

~~~
{
    fields: {
        my_object: {
            type: 'object',
            fields: {
                name: 'name',
                age: {
                    type: 'number',
                    range: [0, 123]
                }
            }
        }
    }
}
~~~


<br>

### Exit
The return will be an object with the fields:
- pagination: previously passed rules are returned here
- items: Array containing all the result, each element represents 1 object created from the provided settings.


<br><br><br><br>

# API para testar paginações
## Diversas funções para auxiliar a realizar toda a paginação
---

Url: [https://pagination-api-ugwo.onrender.com/pagination](https://pagination-api-ugwo.onrender.com/pagination)

## Recursos
- Use qualquer nome, permitindo criar toda a estrutura de seu projeto sem precisar alternar nada na versão final
- Muitos Tipos disponíveis
- Tratamento de Erros com mensagens claras
- Estrutura completa para uma paginação
- [Site](https://victor-spichenkoff.github.io/test-pagination) para testar tudo 



<br>

## Documentação (Exemplo completo no final)
A requisição é realizada usando o método **PUT** e com um objeto de configuração

### Objeto
#### Campo **Pagination**
Campo usado para as informações da página

Itens:
- page -> página atual
- pageSize -> quantos itens por página
- totalPages -> número total de páginas
**Exemplo:**
~~~
{
    pagination: {
        page: 1,
        pageSize: 10,
        totalPages: 10
    }
}
~~~
#### Campo **Fields**
Campo usado para informar quais dados você deseja receber as chaves do objeto podem receber qualquer valor a sua escolha, já os valores representam os retornos

<br>  

##### Strings:
- **name** --> Um nome qualquer
- **fullName** --> Primeiro nome, nome do meio(pode ou não ter e será apenas a abreviação) e sobrenome
- **text_SIZE** --> Varia de 1-5. Tipo 1 fornece um provérbios, os demais, texto em ordem crescente
- **movie** --> Nome de um filme
- **id** --> Um id com 10 letras/números
- **image** --> Fornce uma url de imagem do unsplash

Exemplo:
~~~
{
    fields: {
        nome: 'name',
        frase_do_dia: 'text_1',
        imagem: 'image'
    }
}
~~~

<br>

##### Números:
Utilizam de um um objeto com o 'type' e o array 'range', sempre em ordem crescente

Esses são os tipos disponíveis
- **number** --> Retorna um número dentro do range informado
- **asc** --> Números em ordem crescete dentro do range fornecido. 
- **Desc** --> Números em ordem decrescente

Atenção: **Asc** e **Desc** depende do campo page e pageSize para fornecer valores corretos . Além disso, ao atingir o valor máximo/mínimo serão fornecido números exatamente no limite.

Exemplo:
~~~
{
    fields: {
        idade: {
            type: 'number',
            range: [0, 123]        
        },
        likes: {
            type: 'desc',
            range: [0, 300]
        }
    }
}
~~~

<br>

##### Array
Recebe um objeto com o 'type' igual a 'array' e 'fields' com os valores desejados.

Valores possíveis:
- Name
- fullName
- text_SIZE
- movie
- id
- image
- number (1-100)

Exemplo: 
~~~
{
    fields: {
        meu_array: {
            type: 'array',
            fields: ['id', 'name', 'number']        
        }
    }
}
~~~

<br>

##### Objeto
Recebe um objeto com o 'type' igual a 'object' e 'fields' com os valores desejados.

Pode receber **qualquer valor**, inclusive outro objeto;

Exemplo: 

~~~
{
    fields: {
        meu_objeto: {
            type: 'object',
            fields: {
                nome: 'name',
                idade: {
                    type: 'number',
                    range: [0, 123]
                }
            }      
        }
    }
}
~~~


<br>

### Saída
O retorno será um objeto com os campos:
- pagination: as regras passadas anteriormente são retornadas aqui
- itens: Array contendo todos o resultado, cada elemento representa 1 objeto criado a partir das configurações fornecidas.

<br><br><br>



  ---
## Full Example

~~~
{
    "pagination": {
        "page": 1,
        "pageSize": 2,
        "totalPages": 3
    },
    "fields": {
        "nome": "fullName",
        "ditado": "text_1",
        "likes": {
            "type": "desc", 
            "range": [1, 1000]
        },
        "img": "image",
        "meu_objeto": {
            "type": "object",
            "fields": {
                "nome": "name",
                "idade": {
                    "type": "number",
                    "range": [1, 123]
                },
                "meu_objeto2": {
                    "type": "object",
                    "fields": {
                        "nome": "name",
                        "idade": {
                            "type": "number",
                            "range": [1, 123]
                        }
                    }
                }
                    
            }
        }
    }
}
~~~

Retorno/Saída: 

~~~
{
  "pagination": {
    "page": 1,
    "pageSize": 4,
    "totalPages": 3
  },
  "itens": [
    {
      "nome": "Bruno I. Spichenkoff",
      "ditado": "A esperança é a última que morre.",
      "likes": 1000,
      "img": "https://source.unsplash.com/featured/?minimal",
      "meu_objeto": {
        "nome": "Patrícia",
        "idade": 40,
        "meu_objeto": {
          "nome": "Ian",
          "idade": 29
        }
      }
    },
    {
      "nome": "Victor Jackson",
      "ditado": "Quem muito abraça pouco aperta.",
      "likes": 999,
      "img": "https://source.unsplash.com/featured/?holiday",
      "meu_objeto": {
        "nome": "Kevin",
        "idade": 57,
        "meu_objeto2": {
          "nome": "Beckett",
          "idade": 110
        }
      }
    },

    //esses itens apresentam a mesma estrutura que o itens[0]
    {itens[1]},
    {itens[2]},
    {itens[3]}
  ]
}
~~~