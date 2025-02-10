exports.getProducts = (req, res, next) =>{
    res.json({
        success: true,
        message: "Get Product Working !"
    })
}

exports.getSingleProducts = (req, res, next) =>{
    res.json({
        success: true,
        message: "Get Single Product Working !"
    })
}