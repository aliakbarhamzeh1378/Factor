class UserDtoClass {
    constructor(user) {
        this.email = user.email !== undefined ? user.email : '';
        this.cell_phone = user.cell_phone;
        this.id = user._id
        this.username = user.username;
        this.address = user.address;
        this.images = user.images;

    }

    getUserData() {

        return {
            email: this.email,
            cell_phone: this.cell_phone,
            user_id: this.id,
            username: this.username,
            address: this.address,
            images: "http://127.0.0.1:4300/babak/shir/khorshid/kar/nemikone/hicbaght" + this.images,

        }
    }

}

module.exports = {
    UserDtoClass
}
