import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AccountBalance } from '@mui/icons-material'
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function App(props) {
  const [name, setName] = useState("initial")

  return (<div style={{background:"lightgreen"}}>
    <div>Layout Micro Frontend</div>
    <AccountBalance/>
    <TextField value={name} onChange={(e)=>setName(e.target.value)} placeholder='text'/>
    <Button onClick={()=>props.update(name)}>submit</Button>
  </div>
  )
}

export default App
