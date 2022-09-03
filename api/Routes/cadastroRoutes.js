import { saveData, getAllData } from '../Controller/cadastroController.js'

function cadastroRoutes(app)
{
    app.post("/api/save",async (req, res)=>{
        try{
            await saveData(req, res);
        }
        catch (err){
            console.log(err);
            res.send("Erro: " + err.status + '\n' + err.msg)
        }
    })

    app.get("/api/get-data", async (req, res)=>{
        try{
            await getAllData(req, res);
        }
        catch (err){
            console.log(err);
            res.send("Erro: " + err.status + '\n' + err.msg)
        }
    })
}

export default cadastroRoutes