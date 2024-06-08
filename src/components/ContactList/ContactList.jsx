import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css'

export const ContactList = ({ error }) => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {error && (
        <p>Failed to fetch data from the server</p>
      )}
      <ul>
        {visibleContacts.map(contact => (
          <li className={css.list} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};