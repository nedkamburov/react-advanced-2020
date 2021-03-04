import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './Reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className='form'>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add</button>
    </form>
    {state.people.map(person => {
      return <div key={person.id} className='item'>
        <h4>{person.name}</h4>
        <button onClick={() => dispatch({ type: 'REMOVE_PERSON', payload: person.id })}>remove</button>
      </div>
    })}
  </>
};

export default Index;
