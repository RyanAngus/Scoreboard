

let homeScore = document.getElementById("home-Score");

let awayScore = document.getElementById("away-Score");

let periodCount = document.getElementById("periodDis");

let team1 = document.getElementById("team-1");

let team2 = document.getElementById("team-2");

let perCount = 0;

let homeCount = 0;

let awayCount = 0;



function period() {
    perCount += 1;
    periodCount.textContent = perCount;
    console.log(periodCount); 
    // if (perCount >= 4) {
    //     document.getElementById("period-text").disabled = "disabled";
    // }
}

function periodReset() {
    perCount = null;
    periodCount.textContent = perCount;
    console.log(periodCount);

}

function glow() {
      
     if (homeCount >= awayCount) {
            team1.style.color = "#fc1928";
            team2.style.color =  "#EEEEEE";
     } else {
            team2.style.color = "#fc1928";
            team1.style.color = "#EEEEEE";
     }
 }

function newGame1() {
    
    homeCount = null;
    homeScore.textContent = homeCount;
    console.log(homeCount);
    team1.style.color = "#EEEEEE";

    }

function newGame2() {
    
        awayCount = null;
        awayScore.textContent = awayCount;
        console.log(awayCount);
        team2.style.color =  "#EEEEEE";
    
    }

function homeOne() {
    homeCount += 1;
    homeScore.textContent = homeCount;
    console.log(homeScore);  

};

function homeTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
    console.log(homeScore);  

};

function homeThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
    console.log(homeScore);  

};

function awayOne() {
    awayCount += 1;
    awayScore.textContent = awayCount;
    console.log(awayScore);  

};


function awayTwo() {
    awayCount += 2;
    awayScore.textContent = awayCount;
    console.log(awayScore);  

};


function awayThree() {
    awayCount += 3;
    awayScore.textContent = awayCount;
    console.log(awayScore);  

};



