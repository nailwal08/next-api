//path of this file => create-next-app/pages/api/postcontact.js

import * as fs from 'fs';
import path from 'path';

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
    }
    else if(req.method === 'DELETE'){
        try {
            const { filename } = req.body; // Extract filename from req.body
            if (!filename) {
                return res.status(400).json({ error: 'Filename not provided' });
            }
            const filePath = path.join('contactdata', `${filename}.json`);
            await fs.promises.unlink(filePath);
            res.status(200).json({ message: 'File deleted successfully' });
        } catch (err) {
            console.error('Error deleting file:', err);
            res.status(500).json({ error: 'Error deleting file' });
        }
    } 
    else {
        res.status(405).json({ error: 'Method Not Allowed' });
    } 
}
