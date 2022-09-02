import React from 'react'


import './Form.css'

function Form(){
    return (
        <form method='POST'>
            <h2>Formulário para salvar os contatos</h2>
            <input type="text" placeholder="Insira o nome do contato:" />
            <input type="text" placeholder="Insira o email do contato:" />
            <input type="number" placeholder="Insira o telefone do contato:" />
            <button className='save'>Salvar</button>
            <button className='reset' type="reset">Limpar</button>
        </form>
    )
}

export default Form