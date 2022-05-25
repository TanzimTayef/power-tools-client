import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar";
import Register from "./Pages/Login/Register";
import Footer from "./Pages/Shared/Footer";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddReview from "./Pages/Dashboard/AddReview";
import MyOrder from "./Pages/Dashboard/MyOrder";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import AddTools from "./Pages/Dashboard/AddTools";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageTools from "./Pages/Dashboard/ManageTools";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Payment from "./Pages/Dashboard/Payment";
import NotFound from "./Pages/Shared/NotFound";
import PurchaseContainer from "./Pages/Purchase/PurchaseContainer";
import AllTools from "./Pages/Purchase/AllTools";
import Blogs from "./Pages/Blogs/Blogs";
import Loading from "./Pages/Shared/Loading";



function App() {
  return (
    <div className="mx-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* for test */}
        <Route path="/purchase/:purchaseId" element={<RequireAuth> <PurchaseContainer /> </RequireAuth>}>
          <Route index element={<RequireAuth> <Purchase /></RequireAuth>} />
          <Route path="allTools" element={<AllTools />} /> 
        </Route>
        <Route  path="/dashboard"  element={ <RequireAuth> <Dashboard/> </RequireAuth>}>
          <Route index element={<MyOrder />} />
          <Route path="review" element={<AddReview/>}/>
          <Route path="profile" element={<MyProfile />} />   
          <Route path="manageOrders" element={<ManageOrders />} />   
          <Route path="addTools" element={<AddTools />} />   
          <Route path="makeAdmin" element={<MakeAdmin />} />   
          <Route path="manageTools" element={<ManageTools />} />  
          <Route path="payment/:id" element={<Payment />} />  
        </Route>
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
