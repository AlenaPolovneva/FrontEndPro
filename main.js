const contactBook = {
    contacts: [
        {name: "Victor", phone: +380509151044, email: 'propab12345@ukr.net'},
        {name: "Ksenia", phone: +38093218734, email: 'prostokseniia@gmail.com'},
        {name: "Ivanka", phone: +380663219954, email: 'ivanka@ukr.net'},
        {name: "Sophia", phone: +38067998563, email: 'ivanovasophia@gmail.com'},
        {name: "Evgeniy", phone: +380983457890, email: 'profimport@gmail.com'},
    ],
    findContact: name => contactBook.contacts.find(contact => contact.name === name),
    addContact(name, phone, email) {
        this.contacts.push({name, phone, email});
    }
};
console.log(contactBook.findContact ("Ksenia"));
contactBook.addContact("Maria", "+380509187657", "propadan345@ukr.net");
console.log(contactBook.contacts);
