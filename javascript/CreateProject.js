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

    projectNCell.innerHTML       = '<td><input type="text" class="form-control mr-sm-2" placeholder="Project Name" name="projectName" ></td>'
    clientCell.innerHTML         = '<td><input type="text" class="form-control mr-sm-2" placeholder="Client" name="client"></td>'
    projectCell.innerHTML        = '<td><input type="text" class="form-control mr-sm-2" placeholder="Project" name="project"></td>'
    typeCell.innerHTML           = '<td><select class="custom-select mr-sm-2" id="inlineFormCustomSelect"><option selected>Choose...</option><option value="1">ONE</option><option value="2">TWO</option><option value="3">THREE</option><option value="4">FOUR</option><option value="5">FIVE</option></select></td>'
    keywordsCell.innerHTML       = '<td><input type="text" class="form-control mr-sm-2" placeholder="Keywords" name="Keywords"></td>'
    projectPaletteCell.innerHTML = '<td><input type="color" class="form-control mr-sm-2" name="color"></td>'
    dueDateCell.innerHTML        = '<td><input type="date" class="form-control mr-sm-2" name="Due Date"></td>'
    deleteCellButton.innerHTML   = '<td><button class="btn btn-danger" onclick="delRow(this)">Delete</button>'

}

function delRow(x)
{
    document.getElementById("projects").deleteRow(x.parentElement.parentElement.rowIndex);
}