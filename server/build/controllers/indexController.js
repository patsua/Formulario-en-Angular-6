"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        //res.send('Hello paty')
        res.json({ text: 'API IS /api/cpm' });
    }
}
exports.indexController = new IndexController();
