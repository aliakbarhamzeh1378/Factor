const getErrorStatus = require('../constant/ErrorData');

function findProductErrorMessage(status) {
    return getErrorStatus.PRODUCT_ERROR_STATUS_ARRAY.find(v => v.status === status) || {error: 'There must be an error'};
}

let successResponse = (status, succMessage, data) => {
    return {
        status,
        message: succMessage,
        data
    }
}

let productErrorResponse = (statusCode) => {
    return findProductErrorMessage(statusCode);
}

let AuthenticationError = (statusCode) => {
    return getErrorStatus.Authentication_Error.find(v => v.status === statusCode) || {error: 'There must be an error'};
}


module.exports = {
    productErrorResponse,
    successResponse,
    AuthenticationError,
};
