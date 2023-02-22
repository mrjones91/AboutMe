function quiz() {
    let qs = ["What county is DJ from?",
    "What inspired his career path?",
    "What is a JS frameworks or library that is listed in his experience?",
    "What is the name of his freelance biz?",
    "What company did he work at prior to Code Crew (and dijital Technologies)?",
    "Where has DJ teach previously?"];
    
    let as = ["Hardeman",
    "Gaming",
    ["React", "Meteor", "EnchantJS"],
    "dijital Technologies",
    "Sedgwick",
    ["iD Tech Camps", "dijital Academy"]];

    let score = 0;
    
    for(let i = 0; i <= qs.length; i++) {
        if (i == 5) {
            let ng = prompt("BONUS ROUND! Guess a number from 1-10");
            let rn = Math.ceil(Math.random() * 10);
            console.log(rn);
            while (ng != rn) {
                if (ng > rn)
                    alert("hint: lower");
                else
                    alert("hint: higher");
                ng = prompt("Guess again");
            }
            return;
        }
        let a = prompt(qs[i]).toLowerCase();
        console.log(a);
        console.log(as[i]);
        try {
            let aCheck = false;
            if (typeof as[i] != 'string') {
                console.log('array answer');
                aCheck = true;
            } 
            if (aCheck) {
                check(as[i].includes(a.toLowerCase()));
            } else {
               check(a == as[i]);
           }
        } catch (e) {
            console.log(e);
        }
    }
    alert("You scored: " + score + "out of 6");
}

function check(param) {
    console.log(param);
    if (param) {
        alert("Correct!");
        score++;
    } else {
        alert("Error!");
    }
}

document.getElementById('quiz').addEventListener('click', quiz);