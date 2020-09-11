class Book {
    constructor(title, fieldofstudy, publisher, author){
    this.title = title;
    this.fieldofstudy = fieldofstudy;
    this.publisher = publisher;
    this.author = author;
}
    set title(value){
        this.title = value;
    }
    get title()
    {
        return this.title;
    }
    set fieldofstudy(value){
        this.fieldofstudy = value;
    }
    get fieldofstudy()
    {
        return this.fieldofstudy;
    }
    set publisher(value){
        this.publisher = value;
    }
    get publisher()
    {
        return this.publisher;
    }
    set author(value){
        this.author = value;
    }
    get author()
    {
        return this.author;
    }
    
}

class Audiobook extends Book{
    constructor(title, fieldofstudy, publisher, author, numberofseconds, uom){
        super(...arguments);
        this.numberofseconds = numberofseconds;
        this.uom = uom;
    }
    set numberofseconds(value)
    {
        if (value <= 0) {
            throw new Error("Invalid value. Number of seconds should be more than 0");
        }
        this.numberofseconds = value;
    }
    get numberofseconds()
    {
        return this.numberofseconds;
    }
    set uom(value)
    { 
        this.uom = value
    }
    get uom()
    {
        return this.uom;
    }
    get infoObj() {
        return {
            title: this.title,
            fieldofstudy: this.fieldofstudy,
            publisher: this.publisher,
            author: this.author,
            numberofseconds: this.numberofseconds,
            uom:this.uom
        };
    }
}


class Textbook extends Book{
    constructor(title, fieldofstudy, publisher, author, numberofpages, uom){
        super(...arguments);
        this.numberofpages = numberofpages;
        this.uom = uom;
    }
    set numberofpages(value)
    {
        if (value <= 0) {
            throw new Error("Invalid value. Number of pages should be more than 0");
        }
        this.numberofpages = value;
    }
    get numberofpages()
    {
        return this.numberofpages;
    }
    set uom(value)
    { 
        this.uom = value
    }
    get uom()
    {
        return this.uom;
    }
    get infoObj() {
        return {
            title: this.title,
            fieldofstudy: this.fieldofstudy,
            publisher: this.publisher,
            author: this.author,
            numberofpages: this.numberofpages,
            uom:this.uom
        };
    }
}

