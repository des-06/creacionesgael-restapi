import { pool } from '../db.js';
import fs from 'fs';


export const getProducts = async (req,res)=>{
    const [result]= await pool.query('SELECT * FROM Product');
    result.map(product => {
        try{
            fs.writeFileSync(`creacionesgael-restapi-production.up.railway.app/${product.p_id}-${product.p_name}.png`,product.p_image);
            product.p_image = `creacionesgael-restapi-production.up.railway.app/${product.p_id}-${product.p_name}.jpg`;
        }catch(error){
            return res.status(500).json({
                message:'Something went wrong'
            });
        }      
    });
   
    res.json(result);
};

