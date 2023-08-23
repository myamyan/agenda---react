import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';


export default function Inserir(){


    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cadastro, setCadastro] = useState('');
    const [favorito, setFavorito] = useState('');

}

async function salvaConts(){


    let contato = {



        nome:        contato,
        telefone:    telefone,
        email:       email,
        favorito:    favorito,
        cadastro:    cadastro

    }



    let url = 'http://localhost:5000/agenda';
    let resp = await axios.post(url, contato);



    alert('Salvou, noice ! :>');



}



return(



    <div className='pagina-inserir'>


    <div className="containerz">



    <h1> Novo Contato </h1>


    <section className="form">


    <div>


    <label>
        
        Nome:

    </label>

    <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

    </div>

    <div>


        <label>

            Telefone:

        </label>


        <input type="text"  value={telefone} onChange={e => setTelefone(e.target.value)} />

    </div>


    <div>


        <label>

            E-mail:

        </label>


        <input type="text"  value={email} onChange={e => setEmail(e.target.value)} />

    </div>



    </section>

    </div>




    </div>









)