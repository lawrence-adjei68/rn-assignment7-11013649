import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./codeSource/navigation/Navigations";
import { CartProvider } from "./codeSource/context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </CartProvider>
  );
}
