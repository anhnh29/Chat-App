import React, { useEffect, useState } from "react";

const PREFIX = 'whatsapp-clone-';

const useLocalStorage = (key,initialValue) => {
  const prefixeKey = PREFIX + key;
  
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixeKey)
    if (jsonValue != null && jsonValue) {
      return JSON.parse(jsonValue)
    }
    if (typeof (initialValue) === 'function') {
      return initialValue()
    } else {
      return initialValue;
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixeKey, JSON.stringify(value))
  }, [prefixeKey, value])
  
  return [value, setValue]
};

export default useLocalStorage;
