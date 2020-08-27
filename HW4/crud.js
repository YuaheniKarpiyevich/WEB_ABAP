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
			var json = toJSONString(form);
      var obj1 = JSON.parse(json);
      var tbody = document.getElementsByTagName("tbody")[0];
      var row = document.createElement("tr");
              
      tbody.appendChild(row);

      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var td5 = document.createElement("td");
      var td6 = document.createElement("td");

      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);
      row.appendChild(td6);

      td1.innerHTML = obj1.title;
      td2.innerHTML = obj1.fieldofstudy;
      td3.innerHTML = obj1.publisher;
      td4.innerHTML = obj1.author;  
      if (obj1.uom === 'second')    
          td5.innerHTML = obj1.numberofseconds;
      else
          td5.innerHTML = obj1.numberofpages;
          d6.innerHTML = obj1.uom;

      }, false);
        


	});

 })();
