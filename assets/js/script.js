var dataHolder = ''
const chooseData = [
    {
        name : "Female Friendly Environment",
        img : "assets/img/aboutIcon4.png"
    },
    {
        name : "Female Friendly Environment",
        img : "assets/img/aboutIcon4.png"
    },
    {
        name : "Female Friendly Environment",
        img : "assets/img/aboutIcon4.png"
    },
    {
        name : "Female Friendly Environment",
        img : "assets/img/aboutIcon4.png"
    },
    {
        name : "Female Friendly Environment",
        img : "assets/img/aboutIcon4.png"
    },
    {
        name : "Female Friendly Environment",
        img : "assets/img/aboutIcon4.png"
    }
]

function chooseTemplate() {
    chooseData.map((val)=>{
        console.log(val);
        dataHolder += `
             <div class="why_choose_boxes">
            <div class="why_choose_img">
                <img src="${val.img}" alt="">
            </div>
            <div class="why_choose_text">
                <p>${val.name}</p>
            </div>
        </div>
        `;
    });
   document.getElementById('WhyChooseSec').innerHTML = dataHolder;

}
// console.log(s);

chooseTemplate();



var teamdataHolder = ''
const teamData = [
    {
        name : "Female Friendly Environment",
        img : "assets/img/team1.png",
        position : "Founder of xml",
        desc : "A professional mountaineer and travel enthusiast, Mr. Jaydeep Mahanta is the driving force behind SoloVibe, inspiring solo travelers to explore with confidence."
    },
    {
        name : "Female Friendly Environment",
        img : "assets/img/team2.png",
        position : "Founder of xml",
        desc : "A former defense aspirant turned entrepreneur, Mr. Shivam Singh Sankhala co-founded SoloVibe with a vision to enhance solo travel experiences."
    },
    {
        name : "Female Friendly Environment",
        img : "assets/img/team1.png",
        position : "Founder of xml",
        desc : "A professional mountaineer and travel enthusiast, Mr. Jaydeep Mahanta is the driving force behind SoloVibe, inspiring solo travelers to explore with confidence."
    },
    {
        name : "Female Friendly Environment",
        img : "assets/img/team2.png",
        position : "Founder of xml",
        desc : "A former defense aspirant turned entrepreneur, Mr. Shivam Singh Sankhala co-founded SoloVibe with a vision to enhance solo travel experiences."
    }
   
]

function teamsTemplate() {
    teamData.map((val)=>{
        console.log(val);
        teamdataHolder += `
             <div class="our_teams_box">
        <div class="our_team_sec_img">
            <img src="${val.img}" alt="">
        </div>
        <div class="our_team_sec_content">
            <h4>${val.name}</h4>
            <h3>${val.position}</h3>
            <p>${val.desc}</p>
  
        </div>
      </div>
        `;
    });
   document.getElementById('teamSec').innerHTML = teamdataHolder;

}

teamsTemplate();