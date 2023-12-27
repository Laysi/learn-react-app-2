import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const AppRoutes: React.FC = () => (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logIn" element={<HomePage />} />
            <Route path="/personaInformation" element={<HomePage />} >
                <Route path="/accountSettings" element={<HomePage />} />
                <Route path="/historicalOrders" element={<HomePage />} />
            </Route>
            <Route path="/productBrowsing" element={<HomePage />}>
                <Route path="/productDetails" element={<HomePage />} />
            </Route>
            <Route path="/connection" element={<HomePage />} />
            <Route path="/shoppingCart" element={<HomePage />} >
                <Route path="/store" element={<HomePage />} />
                <Route path="/pickupPerson" element={<HomePage />} />
                <Route path="/payment" element={<HomePage />} />
                <Route path="/completed" element={<HomePage />} />
            </Route>
            
        </Routes>
);

export default AppRoutes;