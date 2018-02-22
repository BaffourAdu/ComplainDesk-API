exports.showDepartments = function(req, res) {
    res.json({ message: 'hooray! welcome to our Get Department api Controller!' });   
};

exports.createDepartment = function(req, res) {
    res.json({ message: 'hooray! welcome to our Post Department Route!' });   
};

exports.updateDepartment = function(req, res) {
  
    var departmentID = req.params.id;

    res.json({ message: 'hooray! Department with id => ' + departmentID + ' Updated!'});   
};

exports.deleteDepartment = function(req, res) {

    var departmentID = req.params.id;

    res.json({ message: 'hooray! Department with id => ' + departmentID + ' Deleted!' });   
};