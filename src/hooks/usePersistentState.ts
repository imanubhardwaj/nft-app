import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';

function usePersistentState<T>(defaultValue: T, key: string): [T, Dispatch<SetStateAction<T>>] {
  const [value, dispatcher] = useState<T>(defaultValue);

  useEffect(() => {
    const _value = localStorage.getItem(key);
    if (_value) {
      const parsedValue: T = JSON.parse(_value);
      dispatcher(parsedValue);
    }
  }, [key, dispatcher]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value ?? ''));
  }, [key, value]);

  return [value, dispatcher];
}

export default usePersistentState;
