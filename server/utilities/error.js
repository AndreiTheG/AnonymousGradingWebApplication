class ErrorResponse extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export {ErrorResponse};

// class ErrorResponse extends Error {
//     constructor(message, statusCode){
//         super(message);
//         this.statusCode = statusCode;
//     }
// }

// export {ErrorResponse};