// 40X - Client Side Error
// 50X - Server Side Error

module.exports = {

  PRODUCT_ERROR_STATUS_ARRAY: [


    {
      status: 404,
      message: "Not found",
      data: "Product Not Found"
    },
    {
      status: 406,
      message: "data is wrong",
      data: "data is wrong"
    },

  ],
  Authentication_Error:[
    {
      status: 401,
      message: "Access Denied",
      data: "Access Denied"
    }
  ]

}
