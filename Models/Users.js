class User { //Super class
    constructor ( email, username ,password, firstName, lastName, dob, gender){
       this.email = email
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
        this.gender = gender
        
       /*
        this.toJSON = "{" + 
                "\"email\":\"" + this.email+"\","+
                "\"username\":\"" + this.username+"\","+
                "\"password\":\"" + this.firstName+"\","+
                "\"lastname\":\"" + this.lastName+"\","+
                "\"dob\":\"" + this.dob+"\","+
                "\"gender\":\"" + this.gender+"\","+
                "}"*/
        }
        //Age calculator so the website keeps updating the users age
};


exports.userClass = User
//


