import {Request,Response} from 'express';
class IndexController{
    public index (req: Request, res:Response){
        //res.send('Hello paty')
        res.json({text: 'API IS /api/cpm'})
    }
}
export const indexController = new IndexController();
