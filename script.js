var myArray = []
        

setInterval(ajaxCall, 500); 

function ajaxCall() {
    $.ajax({
    method:'GET',
    url:'https://api.thingspeak.com/channels/1732490/feeds.json?api_key=U3TPIFFHCTPIFAJC&results=2',
    success:function(response){
        myArray = response.feeds
        buildTable(myArray)
        console.log(myArray)
    }
})
}





function buildTable(feeds){
    var table = document.getElementById('myTable')

    for (var i = 0; i < 1; i++){
        var row = `<tr>
                        <td>flow</td>
                        <td>${feeds[i].field1}</td>
                  </tr>
                  <tr>
                        <td>volume</td>
                        <td>${feeds[i].field2}</td>
                  </tr>`
        table.innerHTML = row


    }
}
