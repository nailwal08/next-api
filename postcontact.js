//path of this file => create-next-app/pages/api/postcontact.js

import * as fs from 'fs';

export default async function handler(req, res){
    if(req.method === 'POST'){
        try {
            let data = await fs.promises.readdir('contactdata');
            await fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body));
            res.status(200).json({ message: 'File saved successfully' });
        } catch (err) {
            console.error('Error writing file:', err);
            res.status(500).json({ error: 'Error writing file' });
        }
    } else {
        res.status(200).json(["data"]);
    }
}
