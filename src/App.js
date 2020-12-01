import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/Formfield'
import CoolButton from './coolButton/CoolButton'

function App () {
  return (
    <div id="App">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
  )
};

export default App;