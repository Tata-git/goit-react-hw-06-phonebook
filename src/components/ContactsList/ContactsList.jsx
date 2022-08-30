import { useDispatch, useSelector } from 'react-redux';
import { getContactsList, deleteContacts } from 'redux/contactsSlice';
import { ContactList, Item, Contact, Button } from './ContactList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const items = useSelector(getContactsList);

  return (
    <ContactList>
      {items.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact>{name}: </Contact>
          <Contact>{number} </Contact>
          <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </ContactList>
  );
};

//-------------------  useSelector  ---------------
// https://www.edu.goit.global/uk/learn/847265/31183/31257/textbook
//---------------------------App----------------------
//---------------addContact  ---------------
//   const [contacts, setContacts] = useLocalStorage('contacts', []);

//   const addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//   
//   };

//   ----------------------- ContactListItem.jsx  ----------------
// import { Contact, Item, Button } from './ContactListItem.styled';

// export const ContactListItem = ({ name, number, onDelete }) => {
//   return (
//     <Item>
//       <Contact>{name}: </Contact>
//       <Contact>{number} </Contact>
//       <Button type="button" onClick={onDelete}>
//         Delete
//       </Button>
//     </Item>
//   );
// };


