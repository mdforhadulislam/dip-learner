import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import "./styles/main.css";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Routes>
        {/* this all route access only user  */}
        <Route index path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/library" element={<h1>library</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />

        <Route path="/diploma-library" element={<h1>diploma-library</h1>} />
        <Route
          path="/diploma-library/book/:id"
          element={<h1>diploma-library-book:id</h1>}
        />
        <Route path="/genarel-library" element={<h1>genarel-library</h1>} />
        <Route
          path="/genarel-library/book/:id"
          element={<h1>genarel-library-book:id</h1>}
        />

        <Route path="/account" element={<h1>account</h1>} />
        <Route path="/auth/login" element={<h1>login</h1>} />
        <Route path="/auth/register" element={<h1>register</h1>} />
        <Route path="/auth/logout" element={<h1>logout</h1>} />

        <Route path="/account/payment" element={<h1>payments</h1>} />
        {/* this all route access only user  */}

        {/* this all route access only admin user  */}
        <Route
          path="/admin/auth/user"
          element={
            <h1>user add - edit - user account delete - user data update</h1>
          }
        />
        <Route
          path="/admin/library/book/"
          element={<h1>library book add,delete,update</h1>}
        />
        <Route
          path="/admin/user/payment/"
          element={<h1>user payment accept</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
