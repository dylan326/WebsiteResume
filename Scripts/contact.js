
function setCookie()
{
                    document.cookie = "name=" + document.getElementById("fname").value;
                    document.cookie = "email=" + document.getElementById("txtmail").value;
}

//script to make cookie elements populate into the form. Same is being used in the success page. 
function getCookie()
  {
      var cookieArray = document.cookie.split("; ");
        for(var i=0; i<cookieArray.length; i++)
        {
            var nameValueArray = cookieArray[i].split("=")
                if (nameValueArray[0] == "name") 
                {
                    document.getElementById("fname").value = nameValueArray[1]
                }
                else if (nameValueArray[0] == "email") 
                {
                    document.getElementById("txtmail").value = nameValueArray[1]
                    
                }
            
        }
  }
