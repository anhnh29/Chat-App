import { Login } from "./Login";
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './Dashboard';
import {ContactProvider} from '../contexts/ContactProvider'
import { ConversationsProvider } from "../contexts/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <ContactProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactProvider>
    )

  return (
    <>
      {id ? dashboard : <Login setIdUser={setId} />}
    </>
  );
}

export default App;
