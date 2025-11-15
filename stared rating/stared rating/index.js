const stars = document.querySelectorAll(".fa-star");
const selectedRatingValueText = document.querySelector(".selected-rating-value");

let currentTotalSelectedStars = -1;
let hoveredRating = -1;

stars.forEach((startItem, index)=>{
    startItem.dataset.rating = index+1;
    startItem.addEventListener('mouseover', handleMouseOver);
    startItem.addEventListener('click', handleOnClick);
    startItem.addEventListener('mouseleave', handleMouseLeave);
})
function handleMouseOver(event) {
   const currentRatingValue = Number(event.target.dataset.rating);
//    this is just taking the current pointing star val
   if(!currentRatingValue) return;
   else {
    handleUpdateRatingState(currentRatingValue);
   }
}   

function handleUpdateRatingState(currentRatingValue){
    for(let i =0;i<5;i++){
        if(i<currentRatingValue){
            stars[i].classList.replace("far", "fas");
        }
        else{
            stars[i].classList.replace("fas", "far"); 
        }
    }
}

function handleOnClick(event){
    console.log({event}, "check event");
    hoveredRating = -1; 
   const currentRatingValue = Number(event.target.dataset.rating);
   currentTotalSelectedStars = currentRatingValue;
   handleUpdateRatingState(currentTotalSelectedStars); 
   selectedRatingValueText.textContent = currentTotalSelectedStars;
}
function handleMouseLeave(){
    handleUpdateRatingState(currentTotalSelectedStars);
}