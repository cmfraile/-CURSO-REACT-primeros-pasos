import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.sass'

/*
import { holamundoApp2 as App } from './componentes/holamundo';
import { FirstApp as First } from './componentes/componentetarea';
import { fragmentest as Fragmentest , tsfragment as Tsf } from './componentes/fragment';
*/

import { counter as Capp } from './componentes/counterapp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><Capp contador={15}/></React.StrictMode>)
