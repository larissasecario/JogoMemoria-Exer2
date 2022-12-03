import { HeaderJogo } from './headerJogo';
import './style.css'
import { TelaJogo } from './telaJogo';

export const App = () =>{
  return(
    <div className="App">
      <HeaderJogo/>
      <TelaJogo/>
    </div>
  );
}