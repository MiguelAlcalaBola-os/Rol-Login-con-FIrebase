import React from "react";

import Oficialview from "../components/OficialView";
import UserView from "../components/UserView";
import firebaseApp from   "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Home({ user }) {
  return (
    <div>
      Home
      <button onClick={() => signOut(auth)}> Cerrar sesión</button>
      {user.rol === "oficial" ? <Oficialview /> : <UserView />}
    </div>
  );
}

export default Home;