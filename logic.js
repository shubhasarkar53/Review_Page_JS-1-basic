console.log("hello");
const userImg = document.querySelector("#user-img");
const userName = document.querySelector(".person-name");
const userJob = document.querySelector(".person-job");
const userAbout = document.querySelector(".person-about");
const leftBtn = document.querySelector(".fa-angle-left");
const rightBtn = document.querySelector(".fa-angle-right");
const randomBtn = document.querySelector(".random-btn");


const reviews = [
    {
        id:1,
        name:"Tony Stark",
        job: "Graphic Designer",
        about:"Esmeralda Vicente is the founder and CEO of Emerald & Gold Technologies, a leading manufacturer of personal electronics accessories. She finds honesty, creativity and dedication to be the most valuable qualities for success in running her company. In the 10 years since founding Emerald & Gold, Vicente has led the company to an 18% lead in sales over its closest competitor.",
        img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
        id:2,
        name:"Dr. Spencer",
        job: "Researcher",
        about:"I can successfully scale software businesses from from $5 million to $1 billion in revenue.I can align, lead, and grow product teams from 10 to 100 people.Reach out if you want to talk about emerging tech, creating software products, or baseball.",
        img:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
        id:3,
        name:"Carly Gray",
        job: "App Developer",
        about:"I always thought my dream was to be a proofreader for an indie publishing company, sipping my café con leche and reading the opening lines to the next best-selling vampire novel. And that’s when it happened; the spark I was missing ignited the instant I clicked play on my first Python tutorial video.",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id:4,
        name:"Morny Strange",
        job: "Web Developer",
        about:"Human beings are outnumbered by Internet devices. I love the fact that Cisco produces software and solutions that have an impact on everyone’s lives.",
        img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
    
]

let currentPersonIndex=0;

window.document.addEventListener("DOMContentLoaded",function(){
    showUser();
    
})

leftBtn.addEventListener("click",function(){
    currentPersonIndex--;
    if(currentPersonIndex<=0){
        currentPersonIndex=reviews.length-1;
        console.log(currentPersonIndex);
    }
    showUser();

})
rightBtn.addEventListener("click",function(){
    currentPersonIndex++;
    if(currentPersonIndex>=reviews.length){
        currentPersonIndex=0;
    }
    showUser();

})

randomBtn.addEventListener("click",function(){
    let randIndex= Math.floor(Math.random()*(reviews.length));
    currentPersonIndex = randIndex;
    console.log(currentPersonIndex);
    showUser();
})

function showUser(){
    let item = reviews[currentPersonIndex];
    userImg.src=item?.img;
    userName.innerText= item?.name;
    userJob.innerText= item?.job;
    userAbout.innerText=item?.about;
}

