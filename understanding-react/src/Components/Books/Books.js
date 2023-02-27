import React from "react";
import Book from "../Book/Book";

const Books = (props) => {
	const books = props.books;
	return (
		<div>
			{books.map((book) => (
				<Book key={book.name} authore={book.authore} name={book.name}></Book>
			))}
		</div>
	);
};

export default Books;
