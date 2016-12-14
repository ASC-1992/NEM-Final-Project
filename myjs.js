$(document).ready(function(){
    
    var headDiv = document.getElementById("heads");

    var footDiv = document.getElementById("foots");
    var bodyDiv = document.getElementById("body");
    
    
    $.ajax({
        url:"header.html",
        dataType:"html",
        success:function(resp){
           
            headDiv.innerHTML = resp;
            var checkuser = /^[A-Za-z0-9]{6,20}$/;
            var checkpass = /^[A-Za-z0-9]{8,25}$/;
            var login1 = document.getElementById("login");
            var username = document.getElementById("username");
            var password = document.getElementById("password");
            var loginscreen = document.getElementById("fixedlogin");
            var errorDiv = document.getElementById("errorDiv");
            var confirmlogin = document.getElementById("confirmlogin");
            var signout = document.getElementById("signout");
            var c = checkuser.test(username.value);
            var d = checkpass.test(password.value);
            confirmlogin.onclick = function(){
                var c = checkuser.test(username.value);
                var d = checkpass.test(password.value);
                if(c && d){
                    loginscreen.style.display = "none";
                    login1.style.display = "none";
                    signout.style.display = "inline-block";
                }
            }


            username.onkeyup = function(){
                var c = checkuser.test(username.value);
                if (c){
                    username.style.color = "green";
                    username.style.borderColor = "green";
                    errorDiv.innerHTML = "";
                } else {
                    username.style.color = "red";
                    username.style.borderColor = "red";
                    errorDiv.innerHTML = "Username must only use alphabets and numbers. 6-20 chars";
                }
            }

            password.onkeyup = function(){
                var d = checkpass.test(password.value);
                if (d){
                    password.style.color = "green";
                    password.style.borderColor = "green";
                    errorDiv.innerHTML = "";
                } else {
                    password.style.color = "red";
                    password.style.borderColor = "red";
                    errorDiv.innerHTML = "Password must only use alphabets and numbers. 8-25 chars";
                }
            }

            login1.onclick = function(){
                loginscreen.style.display = "block";
            }
            var closelogin = document.getElementById("closelogin");
            closelogin.onclick = function(){
                loginscreen.style.display = "none";
            }

            signout.onclick = function(){
                signout.style.display ="none";
                login1.style.display="inline-block";
            }
            
            var logoBut = document.getElementById("Logo");
            logoBut.onclick = function(){
                $.ajax({
                    url:"homepage.html",
                    dataType:"html",
                    success:function(resp){
                        
                        bodyDiv.innerHTML = resp;            

                    }
                });
            
            }

            var about = document.getElementById("about");
            about.onclick = function(){
                $.ajax({
                    url:"about.html",
                    dataType:"html",
                    success:function(resp){
                        console.log(resp);
                        bodyDiv.innerHTML = resp;
                    }
                });
            }
            var faq = document.getElementById("faq");
            faq.onclick = function(){
                $.ajax({
                    url:"faq.html",
                    dataType:"html",
                    success:function(resp){
                        console.log(resp);
                        bodyDiv.innerHTML = resp;
                    }
                });
            }
            
            var cart = document.getElementById("addCart");
            cart.onclick = function(){
                alert("You have no items in your cart")
            }

            
            var prod = document.getElementById("prodPage");
            prod.onclick = function(){
                
                $.ajax({
                    url:"info.html",
                    dataType:"html",
                    success:function(resp){
                        
                        bodyDiv.innerHTML = resp;
                        var closeStrapDiv = document.getElementById("closeStrap");
                        var strapDiv = document.getElementById("cusStrap");
                        var showStrapDiv = document.getElementById("showStrap");
                        var infoEss = document.getElementById("infoEss");
                        var infoEnh = document.getElementById("infoEnh");
                        var infoExt = document.getElementById("infoExt");
                        var StrapIMG = document.getElementById("StrapIMG");
                        var StrapTitle = document.getElementById("StrapTitle");
                        var StrapDesc = document.getElementById("StrapDesc");
                        var showHardware = document.getElementById("showHardware");
                        var HardwareDiv = document.getElementById("cusHardware");
                        var closeHardwareDiv = document.getElementById("closeHardware");
                        var Strap0 = document.getElementById("Strap0");
                        var Strap1 = document.getElementById("Strap1");
                        var Strap2 = document.getElementById("Strap2");
                        var Strap3 = document.getElementById("Strap3");
                        var Strap4 = document.getElementById("Strap4");
                        var strapTitle = document.getElementById("strapTitle");
                        var Strapimgdes = document.getElementById("Strapimgdes");
                        var NEMcost = document.getElementById("NEMcost");
                        var NEMweight = document.getElementById("NEMweight");
                        var NEMcolour = document.getElementById("NEMcolour");
                        var NEMsize = document.getElementById("NEMsize");
                        var NEMtype = document.getElementById("NEMtype");
                        var strapinfo = document.getElementById("strapinfo");
                        var strapCost = document.getElementById("strapCost");
                        var strapWeight = document.getElementById("strapWeight");
                        var strapColour = document.getElementById("strapColour");
                        var strapSize = document.getElementById("strapSize");
                        var strapType = document.getElementById("strapType");
                        var purchaseBut1 = document.getElementById("buy1")
                        var purchaseBut2 = document.getElementById("buy2")
                        var purchaseBut3 = document.getElementById("buy3")
                        
                        
                        Strap0.onmouseover = function(){
                            Strapimgdes.style.backgroundImage = "url(BrownLeather_1.jpg)";
                            Strapimgdes.style.backgroundSize = "contain";
                            Strapimgdes.style.backgroundRepeat = "no-repeat";
                            strapTitle.innerHTML = "Leather Strap";
                            NEMcost.innerHTML = "$25.00";
                            NEMweight.innerHTML = "50 grams";
                            NEMcolour.innerHTML = "Brown   Black   Grey";
                            NEMsize.innerHTML = "S   M   L";
                            NEMtype.innerHTML = "Buckle";
                            strapColour.style.display = "inline-block";
                            strapCost.style.display = "inline-block";
                            strapSize.style.display = "inline-block";
                            strapType.style.display = "inline-block";
                            strapWeight.style.display = "inline-block";
                            strapinfo.style.display = "none";
                        }
                        Strap1.onmouseover = function(){
                            Strapimgdes.style.backgroundImage = "url(Rubber.jpg)";
                            Strapimgdes.style.backgroundSize = "contain";
                            Strapimgdes.style.backgroundRepeat = "no-repeat";
                            strapTitle.innerHTML = "Rubber Strap";
                            NEMcost.innerHTML = "$25.00";
                            NEMweight.innerHTML = "35 grams";
                            NEMcolour.innerHTML = "Onyx";
                            NEMsize.innerHTML = "S   M   L";
                            NEMtype.innerHTML = "Buckle";
                            strapColour.style.display = "inline-block";
                            strapCost.style.display = "inline-block";
                            strapSize.style.display = "inline-block";
                            strapType.style.display = "inline-block";
                            strapWeight.style.display = "inline-block";
                            strapinfo.style.display = "none";
                        }
                        Strap2.onmouseover = function(){
                            Strapimgdes.style.backgroundImage = "url(aluminum.jpg)";
                            Strapimgdes.style.backgroundSize = "cover";
                            Strapimgdes.style.backgroundPosition = "center";
                            Strapimgdes.style.backgroundRepeat = "no-repeat";
                            strapTitle.innerHTML = "Aluminum Strap";
                            NEMcost.innerHTML = "$30.00";
                            NEMweight.innerHTML = "55 grams";
                            NEMcolour.innerHTML = "Silver";
                            NEMsize.innerHTML = "S   M   L";
                            NEMtype.innerHTML = "Buckle";
                            strapColour.style.display = "inline-block";
                            strapCost.style.display = "inline-block";
                            strapSize.style.display = "inline-block";
                            strapType.style.display = "inline-block";
                            strapWeight.style.display = "inline-block";
                            strapinfo.style.display = "none";
                        }
                        Strap3.onmouseover = function(){
                            Strapimgdes.style.backgroundImage = "url(carbonfibre.jpg)";
                            Strapimgdes.style.backgroundSize = "cover";
                            Strapimgdes.style.backgroundRepeat = "no-repeat";
                            strapTitle.innerHTML = "Carbon Fiber Strap";
                            NEMcost.innerHTML = "$40.00";
                            NEMweight.innerHTML = "45 grams";
                            NEMcolour.innerHTML = "Fiber Black";
                            NEMsize.innerHTML = "S   M   L";
                            NEMtype.innerHTML = "Buckle";
                            strapColour.style.display = "inline-block";
                            strapCost.style.display = "inline-block";
                            strapSize.style.display = "inline-block";
                            strapType.style.display = "inline-block";
                            strapWeight.style.display = "inline-block";
                            strapinfo.style.display = "none";
                        }
                        Strap4.onmouseover = function(){
                            Strapimgdes.style.backgroundImage = "url(gold.jpg)";
                            Strapimgdes.style.backgroundSize = "cover";
                            Strapimgdes.style.backgroundRepeat = "no-repeat";
                            strapTitle.innerHTML = "Gold Chain";
                            NEMcost.innerHTML = "$5000.00";
                            NEMweight.innerHTML = "150 grams";
                            NEMcolour.innerHTML = "Solid Gold";
                            NEMsize.innerHTML = "S   M   L";
                            NEMtype.innerHTML = "Buckle";
                            strapColour.style.display = "inline-block";
                            strapCost.style.display = "inline-block";
                            strapSize.style.display = "inline-block";
                            strapType.style.display = "inline-block";
                            strapWeight.style.display = "inline-block";
                            strapinfo.style.display = "none";
                        }
                        
                        showHardware.onclick = function(){
                            HardwareDiv.style.display = "block";
                            Strapimgdes.style.backgroundImage = "url(BrownLeather_1.jpg)";
                            Strapimgdes.style.backgroundSize = "contain";
                            Strapimgdes.style.backgroundRepeat = "no-repeat";
                            strapTitle.innerHTML = "Modular Straps";
                            NEMcost.innerHTML = "";
                            NEMweight.innerHTML = "";
                            NEMcolour.innerHTML = "";
                            NEMsize.innerHTML = "";
                            NEMtype.innerHTML = "";
                            strapColour.style.display = "none";
                            strapCost.style.display = "none";
                            strapSize.style.display = "none";
                            strapType.style.display = "none";
                            strapWeight.style.display = "none";
                            strapinfo.style.display = "block";
                            strapinfo.innerHTML = "All NEM watches are modular. This means you are able to switch out your strap. NEM has you covered with 5 available straps for you to customize your NEM. Each strap will satisfy your inner fashionista and also keeps its comfort.";
                            
                        }
                        
                        closeHardwareDiv.onclick = function(){
                            HardwareDiv.style.display = "none";
                        }
                        
                        infoEss.onmouseover = function(){
                            StrapIMG.style.backgroundColor = "#F4F0F1";
                            StrapIMG.style.backgroundImage = "url(ess.png)";
                            StrapIMG.style.backgroundSize = "contain";
                            StrapTitle.innerHTML = "Essentials";
                            StrapDesc.innerHTML = "-The Classic-<br><p>Essentials Breaths Ingenuity:<br>Meal Tracking, Meal Recommendations within one click</p>";
                        }
                        
                        infoEnh.onmouseover = function(){
                            StrapIMG.style.backgroundColor = "#F4F0F1";
                            StrapIMG.style.backgroundImage = "url(enha.png)";
                            StrapIMG.style.backgroundSize = "contain";
                            StrapTitle.innerHTML = "Enhanced";
                            StrapDesc.innerHTML = "-The Distinguished-<br>Enhanced Brings Your True Self Out:<br>HOLLA HOLLA GET DOLLAR";
                        }
                        
                        infoExt.onmouseover = function(){
                            StrapIMG.style.backgroundColor = "#F4F0F1";
                            StrapIMG.style.backgroundImage = "url(extr.png)";
                            StrapIMG.style.backgroundSize = "contain";
                            StrapTitle.innerHTML = "Extreme";
                            StrapDesc.innerHTML = "-The High Roller-<br>Extreme Will be Noticed:<br>This is the Super Car of Smart Watches, people will notice you wearing this.";
                        }
                        
                        showStrapDiv.onclick = function(){
                            strapDiv.style.display = "block";
                            StrapIMG.style.backgroundImage = "url(Logo.jpg)";
                            StrapIMG.style.backgroundRepeat = "no-repeat";
                            StrapIMG.style.backgroundSize = "cover";
                            StrapIMG.style.backgroundPosition = "center";
                            StrapTitle.innerHTML = "NEM";
                            StrapDesc.innerHTML = "A personal meal assistant. NEM comes in 3 different models. Esstentials, Enhanced and Extreme. <br> Click on the boxes above for more details.";
                        }
                        
                        closeStrapDiv.onclick = function(){
                            strapDiv.style.display = "none";
                        }
                        
                        purchaseBut1.onclick = function() {
                            alert("You have added a NEM Essentials to your cart!")
                        }
                        purchaseBut2.onclick = function() {
                            alert("You have added a NEM Enhanced to your cart!")
                        }
                        purchaseBut3.onclick = function() {
                            alert("You have added a NEM Extreme to your cart!")
                        }
                    }
                });
            }
            
            
        }
        
                    

    });
    
    $.ajax({
        url:"homepage.html",
        dataType:"html",
        success:function(resp){
            
            bodyDiv.innerHTML = resp;
            var order = document.getElementById("order")
            
            order.onclick = function(){
                $.ajax({
                    url:"info.html",
                    dataType:"html",
                    success:function(resp){
                        
                        bodyDiv.innerHTML = resp;
                    }
                })
            }
            
        }

    });
    
    $.ajax({
        url:"footer.html",
        dataType:"html",
        success:function(resp){
            
            footDiv.innerHTML = resp;
            var supportpage = document.getElementById("support");
            supportpage.onclick = function(){
                $.ajax({
                    url:"support.html",
                    dataType:"html",
                    success:function(resp){

                        bodyDiv.innerHTML = resp;

                    }

                });
            }
        }
    });
    
  
    
});