var boards = document.getElementsByClassName("boards")[0];
var list_tasks = document.getElementsByClassName("list_tasks")[0];
var fixed_div_br = document.getElementsByClassName("fixed_div_br")[0];
var add_task_li = document.getElementsByClassName("add_task_li");
var add_task = document.getElementsByClassName("add_task");
var timeline = document.getElementsByClassName("timeline");
var calendar = document.getElementsByClassName("calendar");
var gantt = document.getElementsByClassName("gantt");

        add_task_li[0].onclick = function(){
            list_tasks.style.display = "none";
            boards.style.display = "none";
            fixed_div_br.style.display = "none";
            add_task[0].style.display = "block";
            timeline[0].style.display = "none";
            calendar[0].style.display = "none";
            gantt[0].style.display = "none";
        }

        inner_upper_nav_li[0].onclick = function(){
            list_tasks.style.display = "block";
            boards.style.display = "none";
            fixed_div_br.style.display = "none";
            add_task[0].style.display = "none";
            timeline[0].style.display = "none";
            calendar[0].style.display = "none";
            gantt[0].style.display = "none";
        }
        inner_upper_nav_li[1].onclick = function(){
            list_tasks.style.display = "none";
            boards.style.display = "flex";
            fixed_div_br.style.display = "block";
            add_task[0].style.display = "none";
            timeline[0].style.display = "none";
            calendar[0].style.display = "none";
            gantt[0].style.display = "none";
        }
        inner_upper_nav_li[2].onclick = function(){
            list_tasks.style.display = "none";
            boards.style.display = "none";
            fixed_div_br.style.display = "block";
            add_task[0].style.display = "none";
            timeline[0].style.display = "none";
            calendar[0].style.display = "block";
            gantt[0].style.display = "none";
        }
        inner_upper_nav_li[3].onclick = function(){
            list_tasks.style.display = "none";
            boards.style.display = "none";
            fixed_div_br.style.display = "block";
            add_task[0].style.display = "none";
            timeline[0].style.display = "none";
            calendar[0].style.display = "none";
            gantt[0].style.display = "block";
        }
        inner_upper_nav_li[4].onclick = function(){
            list_tasks.style.display = "none";
            boards.style.display = "none";
            fixed_div_br.style.display = "block";
            add_task[0].style.display = "none";
            timeline[0].style.display = "block";
            calendar[0].style.display = "none";
            gantt[0].style.display = "none";
        }