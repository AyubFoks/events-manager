const API_URL = 'http://localhost:3001/events';

export const getEvents = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const getEvent = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createEvent = async (event) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  return await response.json();
};

export const updateEvent = async (id, updatedEvent) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedEvent),
  });
  return await response.json();
};

export const deleteEvent = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};