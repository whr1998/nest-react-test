import classes from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import UserListPage from "./pages/user-list-page/user-list-page";
import AddUserPage from "./pages/add-user-page/add-user-page";

function App() {
  return (
    <Layout className={classes.app}>
      <Routes>
        <Route path="/" element={<UserListPage />}></Route>
        <Route path="/addUser" element={<AddUserPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
