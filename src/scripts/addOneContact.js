import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const addContact = createFakeContact();
    contacts.push(addContact);
    await writeContacts(contacts);
  } catch (error) {
    console.error('error:', error);
  }
};

addOneContact();
