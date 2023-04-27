var todo_div = document.getElementsByClassName("todo_div");
        var todo_img = document.getElementsByClassName("todo_img");
        var todo_lower_div = document.getElementsByClassName("todo_lower_div");

        todo_div[0].addEventListener("mouseover",function(){
             todo_lower_div[0].style.display = "flex";
             todo_img[0].style.height = "100%";
        });
        todo_div[0].addEventListener("mouseout",function(){
             todo_img[0].style.height = "0";
             todo_lower_div[0].style.display = "none";
        });

        todo_div[1].addEventListener("mouseover",function(){
             todo_lower_div[1].style.display = "flex";
             todo_img[1].style.height = "100%";
        });
        todo_div[1].addEventListener("mouseout",function(){
             todo_img[1].style.height = "0";
             todo_lower_div[1].style.display = "none";
        });

        todo_div[2].addEventListener("mouseover",function(){
             todo_lower_div[2].style.display = "flex";
             todo_img[2].style.height = "100%";
        });
        todo_div[2].addEventListener("mouseout",function(){
             todo_img[2].style.height = "0";
             todo_lower_div[2].style.display = "none";
        });

        todo_div[3].addEventListener("mouseover",function(){
             todo_lower_div[3].style.display = "flex";
             todo_img[3].style.height = "100%";
        });
        todo_div[3].addEventListener("mouseout",function(){
             todo_img[3].style.height = "0";
             todo_lower_div[3].style.display = "none";
        });

        todo_div[4].addEventListener("mouseover",function(){
             todo_lower_div[4].style.display = "flex";
             todo_img[4].style.height = "100%";
        });
        todo_div[4].addEventListener("mouseout",function(){
             todo_img[4].style.height = "0";
             todo_lower_div[4].style.display = "none";
        });

        todo_div[5].addEventListener("mouseover",function(){
             todo_lower_div[5].style.display = "flex";
             todo_img[5].style.height = "100%";
        });
        todo_div[5].addEventListener("mouseout",function(){
             todo_img[5].style.height = "0";
             todo_lower_div[5].style.display = "none";
        });

     //    todo_div[6].addEventListener("mouseover",function(){
     //         todo_lower_div[6].style.display = "flex";
     //         todo_img[6].style.height = "100%";
     //    });
     //    todo_div[6].addEventListener("mouseout",function(){
     //         todo_img[6].style.height = "0";
     //         todo_lower_div[6].style.display = "none";
     //    });