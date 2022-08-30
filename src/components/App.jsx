// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { Title, Wrapper } from './App.styled';


// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     // console.log('useName');
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

export function App() {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactsForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </Wrapper>
  );
}
