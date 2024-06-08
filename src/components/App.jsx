import { AddContacts } from "./AddContacts/AddContacts.jsx";
import { ContactList } from "./ContactList/ContactList.jsx";
import { Filter } from "./Filter/Filter.jsx"
import css from './App.module.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/operations.js";
import { getError, getIsLoading } from "./redux/selectors.js";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div>
        <h1>Phonebook</h1>
        <AddContacts />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList >
          {isLoading && !error && <b>Request in progress...</b>}
        </ContactList>
      </div>
    </div>
  );
};