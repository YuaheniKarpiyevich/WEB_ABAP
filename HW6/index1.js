
function onExcute() {
    var tableBody = $("#table").find("tbody");
    var tReq = $('#typeRequest').val();

    $('#rTBody tr').remove();

    switch(tReq) {

        case 'count': {
            $.get("https://services.odata.org/V4/TripPinServiceRW/Airlines/$count",
            function (oData) {
                tableBody.append(`<tr><td>Airlines/$count</td></tr>`);
                tableBody.append(`<tr><td>${oData}</td></tr>`);
                tableBody.append(`<tr><td><br/></td>/tr>`)
            });
            break;
        };
        case 'expand': {
            $.get("https://services.odata.org/V4/TripPinServiceRW/People('russellwhyte')?$expand=Friends",
            function (oData) {
                tableBody.append(`<tr><td>People('russellwhyte')?$expand=Friends</td></tr>`);
                oData.Friends.forEach(element => {
                    tableBody.append(`<tr><td>${element.FirstName}</td><td>${element.LastName}</td><</tr>`);
                });
                tableBody.append(`<tr><td><br/></td></tr>`)
            });
            break;
        };
        case 'orderby': {
            $.get("https://services.odata.org/V4/TripPinServiceRW/Photos?$orderby=Id desc",
            function (oData) {
                tableBody.append($(`<tr><td>Photos?$orderby=Id desc</td></tr>`));
                oData.value.forEach(element => {
                    tableBody.append(`<tr><td>${element.Id}</td><td>${element.Name}</td><</tr>`)
                });
                tableBody.append(`<tr><td><br/></td>/tr>`)
            });
            break;
        };
        case 'search': {
            $.get("https://services.odata.org/V4/TripPinServiceRW/Airlines?$search=Airline",
            function (oData) {
                tableBody.append(`<tr><td>Airlines?$search=Airline</td></tr>`);
                oData.value.forEach(element => {
                    tableBody.append(`<tr><td>${element.AirlineCode}</td><td>${element.Name}</td></tr>`)
                });
                tableBody.append(`<tr><td><br/></td></tr>`)
            });
            break;
        };
        case 'select': {
            $.get("https://services.odata.org/V4/TripPinServiceRW/Airports?$select=Name, IcaoCode",
            function (oData) {
                tableBody.append(`<tr><td>Airports?$select=Name, IcaoCode</td></tr>`)
                    
                oData.value.forEach(element => {
                    tableBody.append(`<tr><td>${element.Name}</td><td>${element.IcaoCode}</td></tr>`);    
                });
                tableBody.append(`<tr><td><br/></td><td><br/></td></tr>`)
            });
            break;
        };
        case 'filter': {
            $.get("https://services.odata.org/V4/TripPinServiceRW/Airports?$filter=startswith(Name,'S') and endswith(IcaoCode,'S') and IataCode eq 'SIN'",
        function (oResult) {
            tableBody.append(`<tr><td>$filter=startswith(Name,'S') and endswith(IcaoCode,'S') and IataCode eq 'SIN'</td></tr>`);
            oResult.value.forEach(element => {
                tableBody.append(`<tr><td>${element.Name}</td><td>${element.IcaoCode}</td><td>${element.IataCode}</td></tr>`)
            });
            tableBody.append(`<tr><td><br/></td><td><br/></td></tr>`);
        });
            break;
        };
        case 'top&skip': {
            $.get("https://services.odata.org/V4/TripPinServiceRW/People?$orderby=LastName&$top=3&$skip=3",
            function (oResult) {
                tableBody.append(`<tr><td>$top=3&$skip=3$orderby=LastName</td></tr>`)
                oResult.value.forEach(element => {
                    tableBody.append(`<tr><td>${element.FirstName}</td><td>${element.LastName}</td></tr>`)
                });
                tableBody.append(`<tr><td><br/></td><td><br/></td></tr>`)
            });
            break;
        };

    };
}

$(function(){

    $('#execute').click( function(ev) {
        ev.preventDefault();
        onExcute(); 
      });

    })      