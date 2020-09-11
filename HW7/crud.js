function  readData() {
  $.ajax({
      url: "http://localhost:2403/books/",
      type: 'GET',
      datatype: 'json',
      success: function (response) {
    $('#rTBody tr').remove();
          for (i=0; i<response.length; i++) {
            if (response[i].uom === 'second')
            {
              $('#book > tbody:last-child').append('<tr><td>' + response[i].id     + '</td>' +
              '<td>' + response[i].title   + '</td>' +
              '<td>' + response[i].fieldofstudy    + '</td>' +
              '<td>' + response[i].publisher   + '</td>' +
              '<td>' + response[i].author   + '</td>' +
              '<td>' + response[i].numberofseconds + '</td>' +
              '<td>' + response[i].uom + '</td></tr>');
            }
            else
            {
              $('#book > tbody:last-child').append('<tr><td>' + response[i].id     + '</td>' +
                                                        '<td>' + response[i].title   + '</td>' +
                                                        '<td>' + response[i].fieldofstudy    + '</td>' +
                                                        '<td>' + response[i].publisher   + '</td>' +
                                                        '<td>' + response[i].author   + '</td>' +
                                                        '<td>' + response[i].numberofpages + '</td>' +
                                                        '<td>' + response[i].uom + '</td></tr>');
            }
          }
      },
      error: function () {
          console.log("Error of reading");
      }
  });
}

function onCreate() {
	var newdata;
	if ($('#typeClass').val() === "audiobook") {
    alert($('#numberofseconds').val());
		newdata = ({
			title: $('#title').val(),
			fieldofstudy: $('#fieldofstudy').val(), 	
			publisher: $('#publisher').val(),
			author: $('#author').val(),
      numberofseconds: $('#numberofseconds').val(),
      numberofpages: 0,
			uom: "second"
		});
	} else {
		newdata = ({
			title: $('#title').val(),
			fieldofstudy: $('#fieldofstudy').val(), 	
			publisher: $('#publisher').val(),
      author: $('#author').val(),
      numberofseconds: 0,
			numberofpages: $('#numberofpages').val(),
			uom: "page"
		});
	}

	$.ajax({
        url: "http://localhost:2403/books/",
        type: 'POST',
        datatype: 'json',
        data: newdata,
        success: function (result) {
			alert("Create was successful");
			readData();
        },
        error: function () {
            alert("Error of creating");
        }
    });

}

function onUpdate(id) {
	var newdata;
	if ($('#typeClass').val() === "audiobook") {
    alert($('#numberofseconds').val());
		newdata = ({
			title: $('#title').val(),
			fieldofstudy: $('#fieldofstudy').val(), 	
			publisher: $('#publisher').val(),
			author: $('#author').val(),
      numberofseconds: $('#numberofseconds').val(),
      numberofpages: 0,
			uom: "second"
		});
	} else {
		newdata = ({
			title: $('#title').val(),
			fieldofstudy: $('#fieldofstudy').val(), 	
			publisher: $('#publisher').val(),
      author: $('#author').val(),
      numberofseconds: 0,
			numberofpages: $('#numberofpages').val(),
			uom: "page"
		});
	}
 
  $.ajax({
    url: "http://localhost:2403/books/" + id,
    type: 'PUT',
    datatype: 'json',
    data: newdata,
    success: function () { 
      alert("Update was successful");              
      readData();
    },
    error: function () {
      alert("Error of updating");
    }
});      
    
}

function onDelete(id) {
  let promise = new Promise((resolve, reject) => {
  $.ajax({
      url: "http://localhost:2403/books/" + id,
      type: 'DELETE',
      datatype: 'json',
      success: function () {
        resolve("success");
      },
      error: function () {
        reject("error");
    }
  });
})
   promise
   .then(function(fulfield){
        alert("Delete was " + fulfield);
        readData();
   })
   .catch(function(error){
    alert(error + "of deleting");
   })                
}

function myFunction() {
	var data = $("#typeClass").val();
	var element1 = $("#divnos");
	var element2 = $("#divnop");

	if (data === "audiobook") {
		element1.show();
		element2.hide();
	} else {
		element1.hide();
		element2.show();
	} 
}

$(function(){

	$(document).ready(function(){
    myFunction();
		readData();
  });
  
  $('#typeClass').change( function(ev) {
    ev.preventDefault();
    myFunction(); 
});

$('#add').click( function(ev) {
  ev.preventDefault();
  onCreate(); 
});

$('#upd').click( function(ev) {
  ev.preventDefault();
  onUpdate($('#id').val()); 
});

$('#del').click( function(ev) {
  ev.preventDefault();
  onDelete($('#id').val()); 
});

})