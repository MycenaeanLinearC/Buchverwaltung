export function Book(title, author, year, description) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.description = description
  }

export function EmptyBook() {
  this.title = "";
  this.author = "";
  this.year = "";
  this.description = "";
}