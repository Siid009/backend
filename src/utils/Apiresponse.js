class Apiresponse{
    constructor(statusCode , date , mesaage="Sucess"){
        this.statusCode= statusCode
        this.date = data
        this.message = mesaage
        this.sucess = statusCode < 400
    }
}