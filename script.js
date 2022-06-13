/* 
create a variable and assign the rating state div to it
create a variable and assin the thankyou state div to it
create a variable to hold all the ratings
create a variable to hold the rating display span
create a variable called active state and set it to the ratings div
add a click event listener to all the ratings
write a function to assign the selected rating to a variable
  store the selected rating in a variable
add a click event listener to the button
write a function to 
  change the rating state display to none
  change the thankyou state display to visible
put an event listener on the button to change the active state
*/

// toggle display

 // when the submit button is clicked, change the active display to the thankyou state

const ratingState = document.querySelector("#rating-state");
const thankyouState = document.querySelector("#thankyou-state");
const ratings = document.querySelectorAll(".ratings--btn");
// console.log(ratings[0].dataset.rating);
const ratingSpan = document.querySelector('#rating-span');
const submitBtn = document.querySelector('#submit-btn');
let activeState = ratingState;
let userRating;

ratings.forEach(rating => {
    rating.addEventListener('click', setUserRating(rating));
})

function setUserRating(selection) {
    userRating = parseInt(selection.textContent);
    ratingSpan.textContent = userRating;
}

submitBtn.addEventListener('click', toggleState);

function toggleState() {
    ratingState.style = "display: none;";
    thankyouState.style = "display: inherit"
};
