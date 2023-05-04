import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "../src/components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "../src/components/Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandeler = () => {
    setCartIsShown(true);
  };

  const hideCartHandeler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandeler} />}
      <Header onShowCart={showCartHandeler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
