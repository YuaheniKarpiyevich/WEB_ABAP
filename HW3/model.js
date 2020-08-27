function Book(title, fieldofstudy, publisher, author) {
    var title = title;
    var fieldofstudy = fieldofstudy;
    var publisher = publisher;
    var author = author;


    this.setTitle = function (value) {
        title = value;
    }
    this.getTitle = function () {
        return title;
    }

    this.setFieldofstudy = function (value) {
        fieldofstudy = value;
    }
    this.getFieldofstudy = function () {
        return fieldofstudy;
    }

    this.setPublisher = function (value) {
        publisher = value;
    }
    this.getPublisher = function () {
        return publisher;
    }

    this.setAuthor = function (value) {
        author = value;
    }
    this.getAuthor = function () {
        return author;
    }

    
}

function Audiobook(title, fieldofstudy, publisher, author, numberofseconds, uom) {
    Book.apply(this, [title, fieldofstudy, publisher, author]);

    var numberofseconds = numberofseconds;

    var uom = uom;


    this.setNumberofseconds = function (value) {
        if (value <= 0) {
            throw new Error("Invalid value. Number of seconds should be more than 0");
        }
        numberofseconds = value;
    }

    this.getNumberofseconds = function () {
        return numberofseconds;
    }

    this.setUom = function (value) {
        uom = value;
    }

    this.getUom = function () {
        return uom;
    }

    this.getObj = function () {
        return { 
                    title: this.getTitle(),
                    fieldofstudy: this.getFieldofstudy(),
                    publisher: this.getPublisher(),
                    author: this.getAuthor(),
                    numberofseconds: this.getNumberofseconds(),
                    uom: this.getUom()                
               };
    }
}

function Textbook(title, fieldofstudy, publisher, author, numberofpages, uom) {
    Book.apply(this, [title, fieldofstudy, publisher, author]);
    var numberofpages = numberofpages;

    this.setNumberofpages = function (value) {
        if (value <= 0) {
            throw new Error("Invalid value. Number of pages should be more than 0");
        }
        numberofpages = value;
    }

    this.getNumberofpages = function () {
        return numberofpages;
    }

    this.setUom = function (value) {
        uom = value;
    }

    this.getUom = function () {
        return uom;
    }

    
    this.getObj = function () {
        return { 
                    title: this.getTitle(),
                    fieldofstudy: this.getFieldofstudy(),
                    publisher: this.getPublisher(),
                    author: this.getAuthor(),
                    numberofpages: this.getNumberofpages(),
                    uom: this.getUom()  
               };
    }
}
