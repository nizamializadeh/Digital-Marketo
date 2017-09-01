 var search1 = document.getElementsByClassName("search")[0];
 var write1 = document.getElementsByClassName("write")[0];
 var puzzle1 = document.getElementsByClassName("puzzle")[0];
 var fly1 = document.getElementsByClassName("fly")[0];
 var stars1 = document.getElementsByClassName("stars")[0];

var li11 = document.getElementById("li1")
var li22 = document.getElementById("li2")
var li33 = document.getElementById("li3")
var li44 = document.getElementById("li4")
var li55 = document.getElementById("li5")


function search(){
        search1.style.display="block";
        write1.style.display="none";
        puzzle1.style.display="none";
        fly1.style.display="none";
        stars1.style.display="none";
        borderColor = "#57b87b";

            li11.style.background="white";
            li22.style.background="#f5f6f7";
            li33.style.background="#f5f6f7";
            li44.style.background="#f5f6f7";
            li55.style.background="#f5f6f7";

            li11.style.borderColor="#57b87b";
            li22.style.borderColor="#f5f6f7";
            li33.style.borderColor="#f5f6f7";
            li44.style.borderColor="#f5f6f7";
            li55.style.borderColor="#f5f6f7";
            $("#design li33:after").css("background","yellow");
}

function writea(){
        write1.style.display="block";
        search1.style.display="none";
        puzzle1.style.display="none";
        fly1.style.display="none";
        stars1.style.display="none";

            li22.style.background="white";
            li11.style.background="#f5f6f7";
            li33.style.background="#f5f6f7";
            li44.style.background="#f5f6f7";
            li55.style.background="#f5f6f7";

            li22.style.borderColor="#57b87b";
            li11.style.borderColor="#f5f6f7";
            li33.style.borderColor="#f5f6f7";
            li44.style.borderColor="#f5f6f7";
            li55.style.borderColor="#f5f6f7";

}  


function puzzle(){
        puzzle1.style.display="block";
        write1.style.display="none";
        search1.style.display="none";
        fly1.style.display="none";
        stars1.style.display="none";


            li33.style.background="white";
            li22.style.background="#f5f6f7";
            li11.style.background="#f5f6f7";
            li44.style.background="#f5f6f7";
            li55.style.background="#f5f6f7";

            li33.style.borderColor="#57b87b";
            li22.style.borderColor="#f5f6f7";
            li11.style.borderColor="#f5f6f7";
            li44.style.borderColor="#f5f6f7";
            li55.style.borderColor="#f5f6f7";
}


function fly(){
        fly1.style.display="block";
        write1.style.display="none";
        puzzle1.style.display="none";
        search1.style.display="none";
        stars1.style.display="none";


            li44.style.background="white";
            li22.style.background="#f5f6f7";
            li33.style.background="#f5f6f7";
            li11.style.background="#f5f6f7";
            li55.style.background="#f5f6f7";

            li44.style.borderColor="#57b87b";
            li22.style.borderColor="#f5f6f7";
            li33.style.borderColor="#f5f6f7";
            li11.style.borderColor="#f5f6f7";
            li55.style.borderColor="#f5f6f7";
}


function stars(){
        stars1.style.display="block";
        write1.style.display="none";
        puzzle1.style.display="none";
        fly1.style.display="none";
        search1.style.display="none";

            li55.style.background="white";
            li22.style.background="#f5f6f7";
            li33.style.background="#f5f6f7";
            li44.style.background="#f5f6f7";
            li11.style.background="#f5f6f7";

            li55.style.borderColor="#57b87b";
            li22.style.background="#f5f6f7";
            li33.style.background="#f5f6f7";
            li44.style.background="#f5f6f7";
            li11.style.background="#f5f6f7";
}
function scroll(){
 jQuery('html,body').animate({scrollTop:1100},1800);

}