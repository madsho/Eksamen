// looking for matches in interests and if one is matching is shows the matching 
const matchInterests = interests.myInterest1.filter(element => interests.myInterest2.includes(element));
//if-statement that shows if there is a match between two ^^
if (matchInterests.length !== 0){
    var matchID = "Match!"
} else {
    var matchID = "No Match!"
}

// Looking for at macth between the new interests   
const newMatchInterests = interests.newInterest1.filter(element => interests.newInterest2.includes(element));
if (newMatchInterests.length !== 0){
    var newmatchID = "Match!"
} else {
    var newmatchID = "No Match!"
}


/* Mangler:
- område 
- det andet køn eller det man er intereseret i 
*/