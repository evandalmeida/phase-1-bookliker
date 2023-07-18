document.addEventListener("DOMContentLoaded", function() {});

fetch("http://localhost:3000/books")
.then( response => response.json())
.then( data => {
    const bookList = document.getElementById("list");
    data.forEach(bookData => {
        console.log(bookData)
        const book = document.createElement("li");
        book.textContent = bookData.title;
        bookList.append(book);

        book.addEventListener("click", () => {
            const panel = document.getElementById("show-panel")
            panel.innerHTML = "" //removes old click
            const imageCont = document.createElement('img')
            imageCont.src = bookData.img_url
                imageCont.style.width = "100px"
            panel.append(imageCont)

            const title = document.createElement("h1")
            title.textContent = bookData.title
            panel.append(title)

            const author = document.createElement("h2")
            author.textContent = bookData.author
            panel.append(author)

            const bookDes = document.createElement("p")
            bookDes.textContent = bookData.description
            panel.append(bookDes)
            
            bookData.users.forEach(likers => {
                const likersList = document.createElement("li")
                likersList.textContent = likers.username
                panel.append(likersList);
            });
        });
    });
});


fetch('http://localhost:3000/books/${bookId}', {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ users: book.users })
    .then((response) => response.json())
    .then((updatedBook) => {
    displayBookDetails(updatedBook)
    })})
    .catch((error) => {console.error("Error updating book:", error)})
    .catch((error) => {console.error("Error fetching book data:", error)})



// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));