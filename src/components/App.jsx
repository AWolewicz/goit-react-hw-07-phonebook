import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from './redux/selectors';
import { fetchContacts } from './redux/operations';
import css from './App.module.css';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Loader } from '../components/Loader/Loader';
import { Filter } from '../components/Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isLoading && !error && <Loader />}
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList error={error} />
      </div>
    </div>
  );
};