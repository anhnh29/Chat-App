import React, { useContext } from "react";
import useLocalStorage from '../components/hooks/useLocalStorage';

const ContactsContext = React.createContext();

export function useContacts() {
  return useContext(ContactsContext)
}

export function ContactProvider({ children }){
  const [contacts, setContacts] = useLocalStorage('contact',[]);
  const createContact = ({ id, name }) => {
    setContacts(preContact => {
      return [
        ...preContact,
        {id, name}
      ]
    })
  }
  return (
    <>
      <ContactsContext.Provider value={{contacts, createContact}}>
        {children}
      </ContactsContext.Provider>
    </>
  )
};
