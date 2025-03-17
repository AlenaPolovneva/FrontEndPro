const user = {
name: "Alena",
    age: 37,
    location: "Kharkiv, Ukraine",
    email: "polovneva_alena@gmail.com",

getInfo () {
    return `Name: ${this.name}\nAge: ${this.age}\nLocation: ${this.age}\nEmail: ${this.email}`
}
};
console.log (user.getInfo());