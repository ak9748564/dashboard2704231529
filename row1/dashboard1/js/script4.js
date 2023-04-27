var done_div = document.getElementsByClassName("done_div");
var done_img = document.getElementsByClassName("done_img");
var done_lower_div = document.getElementsByClassName("done_lower_div");

done_div[0].addEventListener("mouseover",function(){
    done_lower_div[0].style.display = "flex";
    done_img[0].style.height = "100%";
});
done_div[0].addEventListener("mouseout",function(){
    done_img[0].style.height = "0";
    done_lower_div[0].style.display = "none";
});                
                