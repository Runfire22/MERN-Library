var express = require('express');
var router = express.Router();

// Require API modules
var book = require('./api/book');
var author = require('./api/author');
var genre = require('./api/genre');
var book_instance = require('./api/bookinstance');

/// BOOK ROUTES ///
// GET catalog home page.
router.get('/', book.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', book.book_create_get);

// POST request for creating Book.
router.post('/book/create', book.book_create_post);

// GET request to delete Book.
router.get('/book/:id/delete', book.book_delete_get);

// POST request to delete Book.
router.post('/book/:id/delete', book.book_delete_post);

// GET request to update Book.
router.get('/book/:id/update', book.book_update_get);

// POST request to update Book.
router.post('/book/:id/update', book.book_update_post);

// GET request for one Book.
router.get('/book/:id', book.book_detail);

// GET request for list of all Book items.
router.get('/books', book.book_list);

/// AUTHOR ROUTES ///
// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', author.author_create_get);

// POST request for creating Author.
router.post('/author/create', author.author_create_post);

// GET request to delete Author.
router.get('/author/:id/delete', author.author_delete_get);

// POST request to delete Author.
router.post('/author/:id/delete', author.author_delete_post);

// GET request to update Author.
router.get('/author/:id/update', author.author_update_get);

// POST request to update Author.
router.post('/author/:id/update', author.author_update_post);

// GET request for one Author.
router.get('/author/:id', author.author_detail);

// GET request for list of all Authors.
router.get('/authors', author.author_list);

/// GENRE ROUTES ///
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre.genre_create_get);

//POST request for creating Genre.
router.post('/genre/create', genre.genre_create_post);

// GET request to delete Genre.
router.get('/genre/:id/delete', genre.genre_delete_get);

// POST request to delete Genre.
router.post('/genre/:id/delete', genre.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update', genre.genre_update_get);

// POST request to update Genre.
router.post('/genre/:id/update', genre.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genre.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre.genre_list);

/// BOOKINSTANCE ROUTES ///
// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', book_instance.bookinstance_create_get);

// POST request for creating BookInstance. 
router.post('/bookinstance/create', book_instance.bookinstance_create_post);

// GET request to delete BookInstance.
router.get('/bookinstance/:id/delete', book_instance.bookinstance_delete_get);

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', book_instance.bookinstance_delete_post);

// GET request to update BookInstance.
router.get('/bookinstance/:id/update', book_instance.bookinstance_update_get);

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', book_instance.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', book_instance.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance.bookinstance_list);

module.exports = router;