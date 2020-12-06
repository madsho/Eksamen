const expect = require("chai").expect;
const deleteProfile = require("../Frontend/homepage")
const response = require("express");


describe("deleteProfile()", function(){  

    it('should return retun delete profile', function () {
    
       let res = ""
       let exp = "Your profile has been deleted"
       deleteProfile().then(response  => {
        res = response.data
    })
       expect(res).to.be.equal(exp)
    });
})
