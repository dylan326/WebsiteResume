function getCookie()
  {
      var cookieArray = document.cookie.split("; ");
        for(var i=0; i<cookieArray.length; i++)
        {
            var nameValueArray = cookieArray[i].split("=")
                if (nameValueArray[0] == "name") 
                {
                    document.getElementById("fname").innerHTML = nameValueArray[1]
                }
                if (nameValueArray[0] == "email") 
                {
                    document.getElementById("txtEmail").innerHTML = nameValueArray[1]
                    
                }
            
        }
  }

