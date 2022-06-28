
class Error{

}

class ExpressError extends Error{
    ExpressError(message, status)
    {
        this.message = message
        this.status = status 
    }
}

class BadRequestError extends ExpressError{
    BadRequestError()
    {
        this.message = "Bad request"
        this.status = 400 
    }
    
}

class NotFoundError extends ExpressError{
    NotFoundError()
    {
        this.message = "Not found"
        this.status = 404
    }
}

exports.ExpressError = ExpressError
exports.BadRequestError = BadRequestError
exports.NotFoundError = NotFoundError