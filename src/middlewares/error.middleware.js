module.exports=(err,req,res,next)=>{
    const httpStatus = err.status || 500;
    return res.status(httpStatus).send({
        status:httoStatus,
        messsage:err.messsage || "Internal server"
    })
}