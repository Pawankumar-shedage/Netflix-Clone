
//Noob approach

// function changeToCross(id){

//         var icon = document.getElementById(id);

//         //tmr add this project on repo.github.
//         //to do , unclick the cross should again turn to plus...
//         // var count = 0;
//         // count++;
//         // We can implement switch case.
//         // switch

//         switch(id)
//         {
//                 case "plus-icon1":{
//                         if(icon.className = "fa fa-plus" )
//                         {
//                                 icon.className = "fa fa-xmark";
                                
//                         }
//                         else{
//                                 icon.className = "fa fa-plus";
//                         }
//                         break;
//                 }
//                 case "plus-icon2":{
//                         if(icon.className = "fa fa-plus")
//                         {
//                                 icon.className = "fa fa-xmark";
//                         }
//                         break;
//                 }
//                 case "plus-icon3":{
//                         if(icon.className = "fa fa-plus")
//                         {
//                                 icon.className = "fa fa-xmark";
//                         }
//                         break;
//                 }
//                 case "plus-icon4":{
//                         if(icon.className = "fa fa-plus")
//                         {
//                                 icon.className = "fa fa-xmark";
//                         }
//                         break;
//                 }
//                 case "plus-icon5":{
//                         if(icon.className = "fa fa-plus")
//                         {
//                                 icon.className = "fa fa-xmark";
//                         }
//                         break;
//                 }
//                 case "plus-icon6":{
//                         if(icon.className = "fa fa-plus")
//                         {
//                                 icon.className = "fa fa-xmark";
//                         }
//                         break;
//                 }

//                 default:{
//                         document.getElementById(id).style.color = "red"; 
//                 }
//         }
        

        
// }



//Pr approach.
// Questions plus->cross icon.
const crossIcons = document.querySelectorAll(".fa-plus")

//Selecting the cross-icon
function selectIcon(e) {
        removeIcon();
        //changing to cross.
        this.classList.add("fa-xmark");
}

function removeIcon()
{
        crossIcons.forEach(x => x.classList.remove("fa-xmark"));
}

function fun11(e)
{
        document.getElementById("plus-icon2").style.color ="red";
        console.log("Again");
}

//Listen for tab icon click.
crossIcons.forEach(x => x.addEventListener('click', selectIcon)),
crossIcons.forEach(y => y.addEventListener('click', fun11));

// ----------------------------------------------

