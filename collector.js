function collectNames() {

  var studentList = "";

	$("#right>form>table.longlist>tbody").find('tr').slice(1, -1).each(function(){

        var studentName = $(this).children('td').slice(1,2).text();
        studentName = studentName.trim();
        studentName = studentName.split(" ");
        var firstName = studentName[1];
        var sureName = studentName[0];
        studentList += firstName + " " + sureName + "\n";

  });

  $("#toClipBoard").val(studentList);
  $("#toClipBoard").select();
  document.execCommand("copy");

}







function collectAttendingNames() {

  var studentList = "";

	$("#right>form>table.longlist>tbody").find('tr').slice(1, -1).each(function(){
    if ($(this).children('td').slice(2,3).children('select').val() == 0) {

        var studentName = $(this).children('td').slice(1,2).text();
        studentName = studentName.trim();
        studentName = studentName.split(" ");
        var firstName = studentName[1];
        var sureName = studentName[0];
        studentList += firstName + " " + sureName + "\n";

    }

  });

  $("#toClipBoard").val(studentList);
  $("#toClipBoard").select();
  document.execCommand("copy");


}
