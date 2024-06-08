
import { useDispatch } from 'react-redux';
import { getContact, getVisibleContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContacts } from 'components/redux/operations';
import {Filter} from '../Filter/Filter'
    
export const ContactList = () => {
    const dispatch = useDispatch();
    const visible = useSelector(getVisibleContacts);
    const contacts = useSelector(getContact);

    const handleDelete = () => dispatch(deleteContacts(contacts.id))

    return (
    <ul>
        {visible.map(contact => (
        <li key={contact.id}>
            <Filter contact={contact} />
            <button type='button' onClick={() => handleDelete(contacts.id)}>Delete</button>
        </li>
        )
        )}
    </ul>
    );
};