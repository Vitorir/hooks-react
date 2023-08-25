import React, { useState, useEffect } from 'react';

function EventList() {
  const [events, setEvents] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Aqui você pode adicionar a lógica para buscar os eventos
    // e atualizar o estado `events` com os dados obtidos.
    // Por simplicidade, vamos usar um array estático como exemplo.
    const staticEvents = [
      { id: 1, name: 'Evento 1', date: '2022-08-15' },
      { id: 2, name: 'Evento 2', date: '2022-09-10' },
      { id: 3, name: 'Evento 3', date: '2022-07-25' },
    ];

    setEvents(staticEvents);
  }, []);

  useEffect(() => {
    // Aqui você pode adicionar a lógica para ordenar os eventos
    // com base no estado `sortOrder` e atualizar o estado `events`
    // com os eventos ordenados.
    let sortedEvents = [...events];

    if (sortOrder === 'asc') {
      sortedEvents.sort((a, b) => (a.date > b.date ? 1 : -1));
    } else if (sortOrder === 'desc') {
      sortedEvents.sort((a, b) => (a.date < b.date ? 1 : -1));
    }

    setEvents(sortedEvents);
  }, [sortOrder]);

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <h1>Lista de Eventos</h1>
      <div>
        <label htmlFor="sortOrder">Ordenar por:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Data Crescente</option>
          <option value="desc">Data Decrescente</option>
        </select>
      </div>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <span>{event.name}</span> - <span>{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;