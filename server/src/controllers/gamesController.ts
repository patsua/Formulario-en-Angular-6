import {Request,Response} from 'express';
import  pool from '../database';
class GamesController{
    public async list (req :Request, res:Response){
        //pool.query('DESCRIBE games');
         await pool.query('SELECT * FROM listacpm',function(err,result,fields){
             if (err) throw err;
             res.json(result);

         });

        //res.json({text:'listing games'});
        //res.json(games);

       
    }
    public async create (req:Request,res:Response): Promise<any>{
        const result = await pool.query('INSERT INTO listacpm set?',[req.body]);
        res.json({message:'Game Saved'});
    }
}
const gamesController = new GamesController();
export default gamesController;
