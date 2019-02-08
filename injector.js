(function() {

  $("#right").prepend("<button onClick='collectNames()'>Kopiera namn</button>");
  $("#right").prepend("<button onClick='collectAttendingNames()'>Kopiera närvarande namn</button>");
  $("body").append("<textarea id='toClipBoard'></textarea>");

})();
