function whichSchool(age) {
    if (age < 13) {
        return "Elementary School";
    } else if (age >= 13 && age <= 18) {

        return "Secondary School";
    } else if (age > 18) {
        return "LightHouse Labs"
    }
}
console.log(whichSchool(135));