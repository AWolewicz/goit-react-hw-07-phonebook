import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';


export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <div>
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
      </div>
      <button
        type="button"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </div>
  );
};