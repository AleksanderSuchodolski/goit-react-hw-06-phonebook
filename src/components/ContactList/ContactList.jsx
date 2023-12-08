import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts, onRemoveContact }) => (
  <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        id={id}
        onRemoveContact={onRemoveContact}
      />
    ))}
  </ContactsList>
);
