function Book(title, fieldofstudy, publisher, author) {
    var title = title;
    var fieldofstudy = fieldofstudy;
    var publisher = publisher;
    var author = author;
}

Book.prototype.setTitle = function (value) {
    this.title = value;
}

Book.prototype.getTitle = function () {
    return this.title;
}

Book.prototype.setFieldofstudy = function (value) {
    this.fieldofstudy = value;
}

Book.prototype.getFieldofstudy = function () {
    return this.fieldofstudy;
}

Book.prototype.setPublisher = function (value) {
    this.publisher = value;
}

Book.prototype.getPublisher = function () {
    return this.publisher;
}

Book.prototype.setAuthor = function (value) {
    this.author = value;
}

Book.prototype.getAuthor = function () {
    return this.author;
}

function Audiobook(title, fieldofstudy, publisher, author, numberofseconds, uom) {
    Book.apply(this, arguments);
    var numberofseconds = numberofseconds;
    var uom = uom;
}

Audiobook.prototype = Object.create(Book.prototype);
Audiobook.prototype.constructor = Audiobook;


Audiobook.prototype.setNumberofseconds = function (value) {
    if (value <= 0) {
        throw new Error("Invalid value. Number of seconds should be more than 0");
    }
    this.numberofseconds = value;
}
Audiobook.prototype.getNumberofseconds = function () {
    return this.numberofseconds;
}

Audiobook.prototype.setUom = function (value) {
    this.uom = value;
}

Audiobook.prototype.getUom = function () {
    return this.uom;
}

Audiobook.prototype.getObj = function () {
    return { 
                 title: this.getTitle(),
                 fieldofstudy: this.getFieldofstudy(),
                 publisher: this.getPublisher(),
                 author: this.getAuthor(),
                 numberofseconds: this.getNumberofseconds(),
                 uom: this.getUom()                
           };
}


function Textbook(title, fieldofstudy, publisher, author, numberofpages, uom) {
    Book.apply(this, arguments);
    var numberofpages = numberofpages;
    var uom = uom;
}

Textbook.prototype = Object.create(Book.prototype);
Textbook.prototype.constructor = Textbook;


Textbook.prototype.setNumberofpages = function (value) {
    if (value <= 0) {
        throw new Error("Invalid value. Number of seconds should be more than 0");
    }
    this.numberofpages = value;
}
Textbook.prototype.getNumberofpages = function () {
    return this.numberofpages;
}

Textbook.prototype.setUom = function (value) {
    this.uom = value;
}

Textbook.prototype.getUom = function () {
    return this.uom;
}

Textbook.prototype.getObj = function () {
    return { 
                 title: this.getTitle(),
                 fieldofstudy: this.getFieldofstudy(),
                 publisher: this.getPublisher(),
                 author: this.getAuthor(),
                 numberofpages: this.getNumberofpages(),
                 uom: this.getUom()                
           };
}

