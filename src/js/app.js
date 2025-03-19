export default class ErrorRepository {
    constructor(...codes){
        this.codeMap = new Map();
        codes.forEach((error) => this.codeMap.set(error.code, error.description));
    }

    translate(code){
        if (!this.codeMap.has(code)){
            throw new Error('Unknown error')
        }
        return this.codeMap.get(code)
    }
}
