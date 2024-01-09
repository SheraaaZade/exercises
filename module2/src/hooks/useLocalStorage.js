import { useState } from 'react';

const persistValue = (key, value) => {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
}

const fetchValue= (key, defaultValue) => {
  const serializedValue = localStorage.getItem(key);
  return serializedValue ? JSON.parse(serializedValue) : defaultValue;
}

const useLocalStorage= (key, initialValue) => {
  const currentValue = fetchValue(key, initialValue);
  const [ stateValue, stateSetter ] = useState(currentValue);

  const persistentSetter = (newvalue) => {
    persistValue(key, newvalue)
    stateSetter(newvalue);
  } 
  
  return [ stateValue, persistentSetter]
}

export default useLocalStorage;