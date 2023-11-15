# React_Todo_List_App


 <img src="https://github.com/inayoon/react_todo/assets/100747899/ce2f870b-18a7-4a98-9e4d-5a46a4372c57">


 ## `Goals` of this project
 - Break down React components into smaller, reusable parts
 - Focus on practicing React Hooks - useState, useContext for dark mode, useEffect
 - Utilize PostCSS to modularize and structure CSS for improved maintainability
 - Implement data storage using window.localStorage


 ## `Fetures` of this project

 ###  -Breaking down React components into smaller parts

 <img width="503" alt="app" src="https://github.com/inayoon/react_todo/assets/100747899/09533e98-79ab-4391-8ca0-90a8dfa0fe46">

<br/>
 <img width="500" alt="todoList" src="https://github.com/inayoon/react_todo/assets/100747899/76670e1f-a940-40d1-9d34-bde0dff8c8ff">

 <br/>
 <img width="449" alt="breakdown" src="https://github.com/inayoon/react_todo/assets/100747899/3ef823bb-662a-4c8a-ab9e-7e016cf2ba69">


<br/><br/>
 ### -React Hooks - useState, `useContext for dark mode`, useEffect       


<img width="600" alt="dark" src="https://github.com/inayoon/react_todo/assets/100747899/8fd8d2e6-85a8-4a2b-8b19-36d6314978dd">

<br/>
<img width="600" alt="bright" src="https://github.com/inayoon/react_todo/assets/100747899/e3ad14df-dcd7-4272-aef1-7f965f953513">


 
 - Create a new file and establish a context.
 - Encapsulate child components within the context provider and provide the state value.
 - Leverage the useContext hook within a child component.
 <br/> <br/>

```JavaScript
 //DarkModeContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider ({children}){
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
    
    updateDarkMode(!darkMode)
  }
  useEffect(()=> {
    const isDark = 
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return(
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function updateDarkMode(darkMode) {
  if(darkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark' 
  }else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light' 
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
```

 <br/> <br/>
 ### -PostCSS to modularize and structure CSS for improved maintainability
<img width="144" alt="postcss" src="https://github.com/inayoon/React_Todo_List_App/assets/100747899/25fbb2c1-4cf8-4f43-997c-515ff3d1c701">


 - Organizing the PostCSS files within the same folder as the components facilitates ease of maintenance <br/> <br/>
