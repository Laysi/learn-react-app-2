import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import AccountSettingsPage from     "./pages/AccoutSettingsPage/AccoutSettingsPage";
import HistoricalOrdersPage from "./pages/HistoricalOrdersPage/HistoricalOrdersPage";
import NotifyPage from "./pages/NotifyPage/NotifyPage";
import ProductBrowsingPage from "./pages/ProductBrowsingPage/ProductBrowsingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import ConnectionPage from "./pages/ConnectionPage/ConnectionPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import StorePage from "./pages/StorePage/StorePage";
import PickupPage from "./pages/PickupPage/PickupPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import CompletedPage from "./pages/CompletedPage/CompletedPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PersonaInformationPage from "./pages/PersonaInformationPage/PersonaInformationPage";
const AppRoutes: React.FC = () => (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logIn" element={<LogInPage />} />
            <Route path="/personaInformation" element={<PersonaInformationPage/>}>
                <Route path="accountSettings" element={<AccountSettingsPage />} />
                <Route path="historicalOrders" element={<HistoricalOrdersPage />} />
                <Route path="notify" element={<NotifyPage />} />
            </Route>
            <Route path="/productBrowsing" element={<ProductBrowsingPage />}/>
            <Route path="productDetails" element={<ProductDetailsPage />} />
            <Route path="/connection" element={<ConnectionPage />} />
            <Route path="/shoppingCart" element={<ShoppingCartPage />} />
            <Route path="store" element={<StorePage />} />
            <Route path="pickupPerson" element={<PickupPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="completed" element={<CompletedPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
);

export default AppRoutes;