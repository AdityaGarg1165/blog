import fs from 'fs';

export default async function handler(req, res) {
    fs.readFile("pages/api/blogspath.json",'utf-8',(err,data)=>{
        res.status(200).json(data)
    })
    
    
}
  