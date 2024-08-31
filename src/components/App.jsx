import BookList from "./BookList";
import Product from "./Product";
import UserMenu from "./UserMenu";

const favoriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

function App() {
  return (
    <div>
      <UserMenu 
      name="Yevhen" />
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries And Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <hr />
      <h1>Books of the week</h1>
      <BookList books={favoriteBooks} />
    </div>
  );
}

export default App;
