let books = JSON.parse(localStorage.getItem('books')) || [];

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    if (title && author) {
        books.push({ title, author });
        localStorage.setItem('books', JSON.stringify(books));
        listBooks();
        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
    }
}

function listBooks() {
    const list = document.getElementById('books-list');
    list.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} `;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = () => removeBook(index);

        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}

function removeBook(index) {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    listBooks();
}

function searchBooks() {
    const term = document.getElementById('searchTerm').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(term) || book.author.toLowerCase().includes(term));

    const list = document.getElementById('books-list');
    list.innerHTML = '';
    filteredBooks.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        list.appendChild(li);
    });
}

// Lista os livros ao carregar a página
listBooks();
