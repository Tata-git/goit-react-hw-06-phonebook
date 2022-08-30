import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  // items: [],
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    //   {payload} - action.payload
    addContacts(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContacts(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
    viewContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'phonebook',
  version: 1,
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, deleteContacts, viewContact } =
  contactsSlice.actions;

// Selectors
export const getContactsList = state => state.phonebook.items;
export const getFilterValue = state => state.phonebook.filter;

//--------------------------
// createPost(state, action) {}, //  https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice

//---------------------------App----------------------
//---------------addContact  ---------------
//   const [contacts, setContacts] = useLocalStorage('contacts', []);

//   const addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const normalizedName = name.toLowerCase();

//     const duplicate = contacts.find(
//       // ({ name }) => name.toLowerCase() === normalizedName
//       contact => contact.name.toLowerCase() === normalizedName
//     );

//     if (duplicate) {
//       alert(`${name} is already in contacts.`);
//     } else {
//       setContacts(prevState => [contact, ...prevState]);
//     }
//   };
//-------------  deleteContact   ---------------------------
//   const deleteContact = contactId => {
//     console.log(contactId);
//     setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
//   };
//-------------------  Filter  -------------------------
//   const [filter, setFilter] = useState('');

//   const updateFilter = e => setFilter(e.currentTarget.value);

//   const viewContact = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//----------------------LocalStorage ---------
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
