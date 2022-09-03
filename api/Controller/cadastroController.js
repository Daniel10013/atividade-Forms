import Model from '../Model/Model.js'
import { PATH_DATABASE } from '../Config.js';
const modedObj = new Model();
const require = ["nome", "email", "telefone"];


export async function saveData(req , res){
    try{
        let data = req.body;
        validateParams(require, data);
        let db = await modedObj.getData(PATH_DATABASE);
        data["id"] = db["nextId"];
        db["data"].push(data);
        db["nextId"] = data["id"] + 1;
        await modedObj.writeFile(PATH_DATABASE, db, true);
        res.send({status: 200, msg: "Registro adicionado com sucesso"})
    }
    catch(err){
        console.log(err)
    }
}

export async function getAllData(req, res){
    try{
        let data = await modedObj.getData(PATH_DATABASE);
        let db = data["data"]
        res.send(db);
    }
    catch(err){
        console.log(err)
    }
}

function validateParams(require, data){
    let check = require.filter(field => !data.hasOwnProperty(field))
    if(check.length > 0){
        let missingParameters = check.join(', ');
        let error = {status: 400, msg: 'Parâmetros necessários não encontrados: ' + missingParameters}
        throw error;
    }
    return true;
}
