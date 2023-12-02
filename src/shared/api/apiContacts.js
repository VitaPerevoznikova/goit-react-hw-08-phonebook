import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65631f25ee04015769a6d11b.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/', data);
};

export const editContact = data => {
  return contactsInstance.put(`/${data.id}`, {
    avatar: data.avatar,
    name: data.name,
    phone: data.phone,
  });
};
