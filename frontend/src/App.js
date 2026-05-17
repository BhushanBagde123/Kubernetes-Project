import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: "₹80,000",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 2,
      name: "MacBook Pro",
      price: "₹1,50,000",
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2024_M4/IMG_7747.JPG",
    },
    {
      id: 3,
      name: "Headphones",
      price: "₹5,000",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ];

  return (
    <div className="container">
      <h1>Ecommerce Kubernetes Project</h1>

      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


