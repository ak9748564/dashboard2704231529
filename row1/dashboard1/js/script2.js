var inwork_div = document.getElementsByClassName("inwork_div");
        var inwork_img = document.getElementsByClassName("inwork_img");
        var inwork_lower_div = document.getElementsByClassName("inwork_lower_div");

        inwork_div[0].addEventListener("mouseover",function(){
             inwork_lower_div[0].style.display = "flex";
             inwork_img[0].style.height = "100%";
        });
        inwork_div[0].addEventListener("mouseout",function(){
             inwork_img[0].style.height = "0";
             inwork_lower_div[0].style.display = "none";
        });

        inwork_div[1].addEventListener("mouseover",function(){
             inwork_lower_div[1].style.display = "flex";
             inwork_img[1].style.height = "100%";
        });
        inwork_div[1].addEventListener("mouseout",function(){
             inwork_img[1].style.height = "0";
             inwork_lower_div[1].style.display = "none";
        });

        inwork_div[2].addEventListener("mouseover",function(){
             inwork_lower_div[2].style.display = "flex";
             inwork_img[2].style.height = "100%";
        });
        inwork_div[2].addEventListener("mouseout",function(){
             inwork_img[2].style.height = "0";
             inwork_lower_div[2].style.display = "none";
        });

        inwork_div[3].addEventListener("mouseover",function(){
             inwork_lower_div[3].style.display = "flex";
             inwork_img[3].style.height = "100%";
        });
        inwork_div[3].addEventListener("mouseout",function(){
             inwork_img[3].style.height = "0";
             inwork_lower_div[3].style.display = "none";
        });