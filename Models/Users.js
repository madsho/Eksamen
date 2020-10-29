class user { //Super class
    constructor (userid, email, username ,password, firstName, lastName, dob, gender, interests,){
       this.userid = userid
        this.email = email
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
        this.gender = gender 
        this.interests = interests
        }
        //Age calculator so the website keeps updating the users age
    calculateAge() { 
        var date_1 = new Date(this.dob); 
        var diff_ms = Date.now() - date_1.getTime();
        var age_dt = new Date(diff_ms); 
        
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    fullName() { //function that adds firsname, space og lastname together to produce the fullname
        return this.firstName + " " + this.lastName;
    }
};

