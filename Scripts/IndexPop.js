$( document ).ready(function() {

    // <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    function function_one() {
        function_two();  
            // Get the modal
            var modal = document.getElementById('myModal');
                modal.style.display = "block";
                
                
                //  (x) close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                }
                // anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                }
            }
        // alert("testing function order--modal ");
    }
    
    function function_two() {
        function getCookie()
          {
              var cookieArray = document.cookie.split("; ");
                for(var i=0; i<cookieArray.length; i++)
                {
                    var nameValueArray = cookieArray[i].split("=")
                        if (nameValueArray[0] == "name") 
                        {
                            document.getElementById("firstNameIndex").innerHTML = nameValueArray[1]
                        }
                    
                }
      }
        
        // alert("testing function order--getCookie");
    }
    
     function_one();
}); 
