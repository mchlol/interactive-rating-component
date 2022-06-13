const ratingState = document.querySelector("#rating-state");
const thankyouState = document.querySelector("#thankyou-state");
const ratings = document.querySelectorAll(".ratings--btn");
// console.log(ratings[0].dataset.rating);
const ratingSpan = document.querySelector('#rating-span');
const submitBtn = document.querySelector('#submit-btn');
let activeState = ratingState;
let userRating;

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        setUserRating(rating);
})
});

function setUserRating(selection) {
    userRating = Number(selection.textContent);
    ratingSpan.textContent = userRating;
}

submitBtn.addEventListener('click', toggleState);

function toggleState() {
    ratingState.style = "display: none;";
    thankyouState.style = "display: inherit"
};
