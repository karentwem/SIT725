
var expect = require("chai").expect;
var request = require("request");

describe("Stop Timer", function() {
    const startDateTime = "2025-01-26T12:00:00"; // Start date
    const endDateTime = "2025-01-26T13:30:00"; // End date
    var url = "http://localhost:3000/stopTimer/" + startDateTime + "/" + endDateTime;

    it("returns status 200 to check if api works", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("returns statusCode key in body to check if api gives right result should be 200", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(200);
            done();
        });
    });

    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.result).to.be.a('number');
            done();
        });
    });

    it("returns the result equal to 90", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.result).to.equal(90);
            done();
        });
    });

    it("returns the result not equal to 120", function(done) {
        request(url, function(error, response, body) {
            if (error) return done(error);
            body = JSON.parse(body);
            expect(body.result).to.not.equal(120);
            done();
        });
    });
});
