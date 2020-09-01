(function () {
	function toJSONString(form) {
		var elements = form.querySelectorAll("input, select, textarea");
		var obj;
		if( elements[0].value == "audiobook" ){
			obj = new Audiobook();
		}else if( elements[0].value == "textbook" ){
			obj = new Textbook();
		} else {
			return "";
		}

		for (var i = 1; i < elements.length; i++) {
			var element = elements[i];
			switch (element.name) {
				case 'title':
					obj.setTitle(element.value);
					break;
				case 'fieldofstudy':
					obj.setFieldofstudy(element.value);
					break;
				case 'publisher':
					obj.setPublisher(element.value);
					break;
				case 'author':
					obj.setAuthor(element.value);
                    break;
                case 'numberofpages':
                    if(elements[0].value === 'textbook')
                      {  
                        obj.setNumberofpages(element.value);
                        obj.setUom("page");
                      }  
					break;
                case 'numberofseconds':
                    if(elements[0].value === 'audiobook')
                      {
                        obj.setNumberofseconds(element.value);
                        obj.setUom("second");
                      }
                    break;  
			}
		}
		return JSON.stringify(obj.getObj());
	}

	document.addEventListener("DOMContentLoaded", function () {
		var form = document.getElementById("mainForm");
    var addButton = document.getElementById("add");
    var updButton = document.getElementById("upd");
    var delButton = document.getElementById("del");
    var selectType = document.getElementById("typeClass");
    var divpage = document.getElementById("divnop");
    var divsecond = document.getElementById("divnos");

      divpage.hidden = true; 

      selectType.addEventListener('change', function (e) {
        e.preventDefault();

            if(selectType.value == "audiobook")
            {
                divpage.hidden = true;  
                divsecond.hidden = false;  
            }  
            else 
            {
                divpage.hidden = false;
                divsecond.hidden = true;  
            }       
        }
      )

      addButton.addEventListener('click', function (e) {
        e.preventDefault();
        var jsonData = toJSONString(form);
        console.log(jsonData);
        xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
  
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            alert(this.responseText);
            form.dispatchEvent(new Event('submit'));
            onRead();
          }
        });
  
        xhr.open("POST", "http://localhost:2403/books/");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(jsonData);
  
      });

      updButton.addEventListener('click', function (e) {
        e.preventDefault();
        var jsonData = toJSONString(form);
        console.log(jsonData);
        xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
  
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
            onRead();
          }
        });
        xhr.open("PUT", "http://localhost:2403/books/"+document.getElementById("id").value);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(jsonData);
      });
  
      delButton.addEventListener('click', function (e) {
        e.preventDefault();
        xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
  
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
            onRead();
          }
        });
        xhr.open("DELETE", "http://localhost:2403/books/"+document.getElementById("id").value);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
      });
        
      onRead();

	});

 })();

 function onRead() {
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          result=JSON.parse(this.response);
          var resultTBody=document.createElement('tbody');
          result.map(function(nthBOOK){
              resultTBody.appendChild(parseBOOKToTableRow(nthBOOK));
          });

          var table=document.getElementById('rTBody').parentElement;
          table.replaceChild(resultTBody,document.getElementById('rTBody'));
          resultTBody.id='rTBody';
          console.log('success');
      }
  });

  xhr.open("GET", "http://localhost:2403/books/");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
}


function parseBOOKToTableRow(BOOKs){
  var row=document.createElement('tr');
var id=document.createElement('th');

  id.innerText=BOOKs['id'];
row.appendChild(id);

  var title=document.createElement('td');
  title.innerText=BOOKs['title'];
row.appendChild(title);

  var fieldofstudy=document.createElement('td');
  fieldofstudy.innerText=BOOKs['fieldofstudy'];
row.appendChild(fieldofstudy);

  var publisher=document.createElement('td');
  publisher.innerText=BOOKs['publisher'];
row.appendChild(publisher);

  var author =document.createElement('td');
  author.innerText=BOOKs['author'];
row.appendChild(author);

var booksize =document.createElement('td');

if(BOOKs['uom'] === 'second'){
  booksize.innerText=BOOKs['numberofseconds'];
  row.appendChild(booksize);
} else {
  booksize.innerText=BOOKs['numberofpages'];
  row.appendChild(booksize);
}

  var uom =document.createElement('td');
  uom.innerText=BOOKs['uom'];
  row.appendChild(uom);

  return row;
}
