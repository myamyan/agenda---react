import './index.scss';
import { Link } from 'react-router-dom';





export default function Agenda() {
  return (
    <div className="home">
    
    <div className='quadro'>

    <h1>AGENDA</h1>

<div className='botaos'>


          <Link to='/listar'> Consultar </Link>
          <Link to='/inserir'> Inserir </Link>

</div>


    </div>

    </div>
  );
}


