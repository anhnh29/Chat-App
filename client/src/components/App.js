import { Login } from "./Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactProvider } from "../contexts/ContactProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { SocketProvider } from "../contexts/SocketProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactProvider>
    </SocketProvider>
  );

  return <>{id ? dashboard : <Login setIdUser={setId} />}</>;
}

export default App;
