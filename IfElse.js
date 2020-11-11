var age = process.argv[2];
var status = "Not Eligible"
if ((age >= 14) && (age < 19)) {
    status = "Eligible.";
}
console.log(status);