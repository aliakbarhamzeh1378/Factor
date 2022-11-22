class CodeDTO {
    constructor(item) {
        this.id = item._id
        this.code = item.code
        this.created_date = item.created_date
    }

    getCode() {
        return {code: this.code}
    }

    checkExpiration() {
        let date = new Date()
        console.log(this.id)
        console.log(date - this.created_date)
        return date - this.created_date >= 50000;
    }

}

module.exports = {
    CodeDTO
}


