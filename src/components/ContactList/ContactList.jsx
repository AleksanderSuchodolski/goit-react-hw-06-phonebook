import { getFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { delContact, getPhoneBookValue } from '../../redux/phoneBookSlice';
import { ContactsList, Contact, ButtonRemowe } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const phoneBook = useSelector(getPhoneBookValue);
  const filterPhoneBook = useSelector(getFilter);

  const lowerFilter = filterPhoneBook.toLowerCase().trim();
  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );
  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };

  return (
    <ContactsList>
      {visibleContacts.map(({ name, number, id }) => (
        <Contact key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonRemowe typ="button" onClick={() => deleteContact(id)}>
            Delete
          </ButtonRemowe>
        </Contact>
      ))}
    </ContactsList>
  );
};
