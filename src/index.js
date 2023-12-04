import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <h1> Hello react</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //   const style = { color: "red", fontSize: "45px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast Rect Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>our menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>Authentic Italian Cusine of all all the delicious pizzas</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p> we are still working on our Menu,please come later </p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT " : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  //   if (hour >= openHour && hour <= closehour) alert("we are currently open");
  //   else alert("sorry we are closed");
  // if (!isOpen) return <p>CLOSED</p>;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openhour} closehour={closehour} />
      ) : (
        <p>
          we are happy to welcome you betwen {openhour}:00 to {closehour}:00
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "were are currenty open");
}
function Order({ closehour, openHour }) {
  return (
    <div className="order">
      <p>
        we are open form {openHour} until {closehour}:00. come visit us
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
