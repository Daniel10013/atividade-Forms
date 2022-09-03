import fs from "fs";

export class Model{
    async getData(path) {
        try{
            let data = await fs.readFileSync(path);
            return ((data.length == 0) ? {} : (await JSON.parse(data.toString())))
        }
        catch(err){
            console.log(err)
        }
    }

    async writeFile(path, data, reWriteFile = false){
        try{
            if(reWriteFile){
                return await fs.writeFileSync(path, JSON.stringify(data, null, 4))
            }
            return await fs.appendFileSync(path, JSON.stringify(data, null, 4));
        }
        catch(err){
            console.log(err)
        }
    }

    async findData(path, id){
        try{
            let data = await this.getData(path);
            let findedData = data["grades"].find((eachData) => eachData.id == id);
            return ((findedData == undefined) ? -1 : (findedData));
        }
        catch(err){
            console.log(err)
        }
    }
}

export default Model