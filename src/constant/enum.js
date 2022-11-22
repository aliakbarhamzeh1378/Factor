module.exports = {
    UserType: {
        Admin: 1,
        Seller: 1,
        User: 0,
    },
    VerificationState: {
        CodeWrong: 0,
        UserWrong: 1,
        Verified: 2

    },
    UserState: {
        NotVerified: 1,
        Verified: 0,
    },
    ProductState: {
        awaitingPayment: 0,
        processing: 1,
        delivered: 2,
        returned: 3,
        canceled: 4,
    },
    PaymentState: {
        awaitingPayment: 0,
        success: 1,
        cancel: 2,
        error: 3
    }
    ,
    Config: {
        minimum_time_for_forget_password: 10000
    }
}
