
//Booklist section
const bookList = document.querySelector('#main-section__book-list');
const trashImages = document.querySelectorAll('.trash-bin-image i');
// const trashImages = document.querySelectorAll('.trash-bin-image .fa-solid');


// form and its contents
const form = document.querySelector('#main-section__book-description__form');
const inputs = document.querySelectorAll('.form-input');
const bookTitle = document.querySelector('#book-title');
const author = document.querySelector('#author');
const bookUrl = document.querySelector('#book-url');
const price = document.querySelector('#book-price');
const stockStatus = document.querySelector('#stock-option');
const submitButton = document.querySelector('#add-book');

window.onload = function() {
    //removes any books from the list, when you press the trash icon
    trashImages.forEach(trash => {
        trash.addEventListener('click', function() {
            trash.parentNode.parentNode.remove();
        });
    });

    //This event adds a book and all of its details into the book list.
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();

        //creates article element to hole entire book info
        const article = document.createElement('article');
        article.classList.add('book-added');

        //creates a div that will hold the bookcover image
        const bookCover = document.createElement('div');
        bookCover.classList.add('bookcover');
        const bookImage = document.createElement('img');
        bookImage.src = bookUrl.value;
        bookImage.style.width = '100px';
        bookImage.style.height = '149px';
        bookImage.alt = `${bookTitle.value}-bookcover`;
        bookCover.appendChild(bookImage);
        article.appendChild(bookCover);

        //creates a div that holds title, author, stock and price
        const bookOutline = document.createElement('div');
        bookOutline.classList.add('book-outline');

        const bookTitleH1 = document.createElement('h1');
        bookTitleH1.classList.add('book-outline__header');
        bookTitleH1.textContent = bookTitle.value;
        bookOutline.appendChild(bookTitleH1);

        const authorOutline = document.createElement('p');
        authorOutline.classList.add('book-outline__author');
        authorOutline.textContent = author.value;
        bookOutline.appendChild(authorOutline);

        const stockOptionOutline = document.createElement('p');
        stockOptionOutline.classList.add('book-outline__stockoption');
        const stockOptionIcon = document.createElement('div');
        stockOptionIcon.classList.add('book-outline__stockoption__icon');
        if (stockStatus.value === 'unavailable') {
            stockOptionIcon.style.backgroundColor = 'red';
            stockOptionIcon.textContent = stockStatus.value;
            stockOptionIcon.style.color = 'black';
            stockOptionIcon.style.fontWeight = 400;
        } else {
            stockOptionIcon.style.backgroundColor = 'green';
            stockOptionIcon.textContent = stockStatus.value;
        }
        stockOptionOutline.appendChild(stockOptionIcon);
        bookOutline.appendChild(stockOptionOutline);

        const priceOutline = document.createElement('h1');
        priceOutline.classList.add('book-outline__price');
        priceOutline.textContent = `$${price.value}`;
        bookOutline.appendChild(priceOutline);
        article.appendChild(bookOutline);
        // end of the book description section

        //creates a div and an i element for the trash icon
        const trashParentDiv = document.createElement('div');
        trashParentDiv.classList.add('trash-bin-image');
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fa-solid');
        trashIcon.classList.add('fa-trash');
        trashParentDiv.appendChild(trashIcon);
        article.appendChild(trashParentDiv);

        //appends the entire book into the booklist
        bookList.appendChild(article);

        trashIcon.addEventListener('click', function() {
            article.remove();
        });
    });
}
