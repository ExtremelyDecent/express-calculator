/** custom class for errors */

class ExpressError extends Error{
    constructor(messsage, status){
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}

module.exports = ExpressError;