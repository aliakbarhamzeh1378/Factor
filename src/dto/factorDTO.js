class FactorDtoClass {
    constructor(Factor) {
        this.date = Factor.date;
        this.seller = Factor.seller;
        this.id = Factor._id
        this.buyer = Factor.buyer;
        this.product = Factor.product;
        this.count = Factor.count;
        this.user_id = Factor.user_id;

    }

    getFactorData() {

        return {
            date:this.date,
            seller:this.seller,
            id:this.id,
            buyer:this.buyer,
            product:this.product,
            count:this.count,
            user_id:this.user_id

        }
    }

}

module.exports = {
    FactorDtoClass
}
