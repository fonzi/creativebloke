function create()
{
    var table = document.getElementById("projects");
    var row = table.insertRow(-1);
    var projectNCell = row.insertCell(0);
    var clientCell = row.insertCell(1);
    var projectCell = row.insertCell(2);
    var typeCell = row.insertCell(3);
    var keywordsCell = row.insertCell(4);
    var projectPaletteCell = row.insertCell(5);
    var dueDateCell = row.insertCell(6);
    var deleteCellButton = row.insertCell(7);

    projectNCell.innerHTML       = '<td><input type="text" class="form-control mr-sm-2" placeholder="Ass Project Name" name="projectName" ></td>'
    clientCell.innerHTML         = '<td><input type="text" class="form-control mr-sm-2" placeholder="Ass Client" name="client"></td>'
    projectCell.innerHTML        = '<td><input type="text" class="form-control mr-sm-2" placeholder="Ass Project" name="project"></td>'
    typeCell.innerHTML           = '<td><input type="text" class="form-control mr-sm-2" placeholder="Ass Type" name="Type"></td>'
    keywordsCell.innerHTML       = '<td><input type="text" class="form-control mr-sm-2" placeholder="Ass Keywords" name="Keywords"></td>'
    projectPaletteCell.innerHTML = '<td><input type="color" class="form-control mr-sm-2" name="color"></td>'
    dueDateCell.innerHTML        = '<td><input type="date" class="form-control mr-sm-2" name="Due Date"></td>'
    deleteCellButton.innerHTML   = '<td><button class="btn btn-danger" onclick="delRow(this)">Delete</button>'
}

function delRow(x)
{
    document.getElementById("projects").deleteRow(x.parentElement.parentElement.rowIndex);
}