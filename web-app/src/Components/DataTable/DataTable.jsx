import React from "react";



import './DataTable.css'

function DataTable(){
    return (
        <table>
            <thead>
                <tr>                    
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>                    
                    <td>1</td>
                    <td>teste</td>
                    <td>teste@gmail.com</td>
                    <td>3199895484</td>
                    <td><button type="button" className="btn-delete">Delete</button></td>
                </tr>
                <tr>                    
                    <td>2</td>
                    <td>teste</td>
                    <td>teste@gmail.com</td>
                    <td>3199895484</td>
                    <td><button type="button" className="btn-delete">Delete</button></td>
                </tr>
                <tr>                    
                    <td>3</td>
                    <td>teste</td>
                    <td>teste@gmail.com</td>
                    <td>3199895484</td>
                    <td><button type="button" className="btn-delete">Delete</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default DataTable