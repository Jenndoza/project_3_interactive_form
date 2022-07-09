console.log("test");

const nameElement = document.getElementById('name');
console.log(nameElement);
const nameHint= document.getElementById('name-hint');
const jobRole = document.getElementById ('title');
const otherJobRole= document.getElementById('other-job-role');
console.log(otherJobRole);
const design= document.getElementById('design');
const color= document.getElementById('color');
const colorOption= color.children// child property to list all colors 
console.log(colorOption);
const activities= document.getElementById('activities')
const activityCost= document.getElementById ('activity-cost');
const activitiesCost=document.getElementById('activities-cost');
const payment= document.getElementById('payment');
const creditCard= document.getElementById('credit-card');
const paypal= document.getElementById('paypal');
const bitcoin= document.getElementById('bitcoin');
const form= document.querySelector('form');
const checkbox= document.querySelectorAll('input[type="checkbox"]');
const activitiesBox= document.getElementById('activities-box');
const activityHint= document.getElementById('activity-hint');
let email=document.getElementById('email');
const emailHint= document.getElementById('email-hint');
const zip= document.getElementById('zip');
const zipHint=document.getElementById('zip-hint');
const ccNum= document.getElementById('cc-num');
const ccHint= document.getElementById('cc-hint');
const cvv=document.getElementById('cvv');
const cvvHint= document.getElementById('cvv-hint');

//adding focus state to the name field 
nameElement.focus(); 

//to hide "Other Job Role" field by default 
otherJobRole.type='hidden';

//"Job Role" menu is displayed, if "Other Job Role" is chosen, this is allow for new field input.
jobRole.addEventListener('change',(e)=>{
    if(e.target.value ==='other'){
        otherJobRole.type='text';
    }else{
        otherJobRole.type='hidden';
    }
    });

//T-shirt section allows user to pick design by colors available.
color.disabled= true;
design.addEventListener('change',(e) => {
    color.disabled= false;
        for (let i=0; i< colorOption.length; i++){
            if (e.target.value!== colorOption[i].getAttribute('data-theme')){
                colorOption[i].hidden=true;
                colorOption[i].removeAttribute('selected');
                console.log(design);
        } else {
            colorOption[i].hidden=false;
            colorOption[i].setAttribute('selected',true);
        };
    }});

 //Here, the total cost of selected activities in "Register for Activities" is totaled and display for the user.
let totalCost=0 
activities.addEventListener('change',(e)=>{
    let activityCost= +e.target.getAttribute('data-cost');
    if (e.target.checked){
        totalCost += activityCost;
    } else{
        totalCost-= activityCost;
    }
    activitiesCost.innerHTML= `Total:$${totalCost}`;
});   

//The prreferred payment method (credit card) and requirements are displayed. Other options are hidden until chosen. 
bitcoin.hidden = true;
paypal.hidden = true;

