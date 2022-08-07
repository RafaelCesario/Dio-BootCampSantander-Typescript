// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Employee{
        code: number,
        name: string
}

let employee01 = {} as Employee;
employee01.code = 10;
employee01.name = "John";