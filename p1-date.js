/*
    CIT 281 Project 1
    Name: Pablo Manriquez
*/ 

function getweekDay(date) {

    let fullWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return fullWeek[date.getDay()];

}

console.log(getweekDay(new Date()));

