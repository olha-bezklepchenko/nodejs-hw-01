import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    return count;
  } catch (error) {
    console.error('error:', error);
  }
};

console.log(await countContacts());
