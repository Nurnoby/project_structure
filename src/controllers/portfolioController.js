exports.create = (req, res) => {
    res.status(200).json({status:"success", data: "I am from portfolio controller"});    
    res.end();
};
exports.read = (req, res) => {
    res.status(200).json({status:"success", data: "I am from portfolio controller"});
    res.end();
};
exports.delete = (req, res) => {
    res.status(200).json({status:"success", data: "I am from portfolio controller"});  
    res.end();
};
exports.update = (req, res) => {
    res.status(200).json({status:"success", data: "I am from portfolio controller"});   
    res.end();
};