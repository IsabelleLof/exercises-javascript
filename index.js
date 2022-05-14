//Topics to cover
//Conditinals

const catsCounts = 4;
const houndCounts = 3;

if(catsCounts => houndCounts) {
    console.log('there is more cats than dogs');
} else {
    console.log('there is less dogs than cats');
}


//Create a system laundry booking checker conditional to check if the time you have booked 
//is booked in the system and that you can come in and do your laundry.
//Create two variabels bookedMonday and loggedIn.
//If both are true you can do your laundry on monday.
//If you haven't booked the laundry on monday you can't do your laundry.

const bookedMonday = false;
const loggedIn = false;
if(bookedMonday && loggedIn) {
    console.log('you can do your laundry on monday')
} else if(bookedMonday === true) {
    console.log('you can not do your laundry on monday')
} else {
    console.log('you can not do your laundry today beacause you have not booked and not logged in')
}
