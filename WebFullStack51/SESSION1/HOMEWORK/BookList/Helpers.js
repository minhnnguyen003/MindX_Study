import Book from "./Book.js";

// get style

export const style = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">
`

// get data 


export const getData = () => {
    return JSON.parse(localStorage.getItem('listBook'));
}

// print list

export const printList = () => {
    const listBook = getData();
    let template = "";
    for(let key in listBook) {
        const newBook = new Book(key, listBook[key].title, listBook[key].author, listBook[key].img);
        template += newBook.show();
    }
    document
            .querySelector("main-screen")
            .shadow.querySelector("#bookList_content")
            .innerHTML = template;
}