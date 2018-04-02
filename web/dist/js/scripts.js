$(document).ready(function(e) {    
    var id = 0;
    // GET request to url
    function callBE(url) {
        $.ajax({
            url: "/api/hello-service/", 
            type: "get",        
            cache: false,
            success: function(returnhtml, status, xhr){ 
                
            $('table > tbody:last-child')
                .append('<tr>' + 
                     '<td>'+ (++id) +'</td>'+
                     '<td>'+ new Date() +'</td>'+
                     '<td>' + xhr.getResponseHeader("x-backend-server") + '</td>'+
                     '<td>' + returnhtml.split(' ')[0] + '</td>'+
                     '<td>' + returnhtml + '</td>'
                     +'</tr>');                 
            }           
        });
    }
    setInterval(function(){ callBE("/api/hello-service/"); }, 750);
      
});