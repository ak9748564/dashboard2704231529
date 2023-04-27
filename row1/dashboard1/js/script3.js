var review_div = document.getElementsByClassName("review_div");
var review_img = document.getElementsByClassName("review_img");
var review_lower_div = document.getElementsByClassName("review_lower_div");

review_div[0].addEventListener("mouseover",function(){
    review_lower_div[0].style.display = "flex";
    review_img[0].style.height = "100%";
});

review_div[0].addEventListener("mouseout",function(){
    review_img[0].style.height = "0";
    review_lower_div[0].style.display = "none";
});

review_div[1].addEventListener("mouseover",function(){
    review_lower_div[1].style.display = "flex";
    review_img[1].style.height = "100%";
});
review_div[1].addEventListener("mouseout",function(){
    review_img[1].style.height = "0";
    review_lower_div[1].style.display = "none";
});        