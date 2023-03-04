const Livro = require('../models/Livro')

class LivroController{
    async Post(req,res){
        const {titulo, autor, capa, categoria}= req.body
        const livro = {
            titulo,
            autor,
            capa,
            categoria,
        }

        try {
            await Livro.create(livro)
            res.status(201).json({msg: "livro inserido com sucesso"})
        } catch (error) {
            res.status(500).json({msg:"livro não foi inserido"})
        }
    }

    async get (req,res){
        try {
            const livro = await Livro.find()
            res.status(201).json(livro)
        } catch (error) {
            res.status(500).json("usário não encontrado")
        }
    }

    async getId(req, res){
        const id = req.parms.id
        try {
            const livro = await Livro.findOne({_id: id})
            res.status(201).json(livro)
        } catch (error) {
            res.status(500).json({msg:"Id não encontrado"})
            
        }
    }

    async delete (req,res){
        const id = req.parms.id
        const livro = await Livro.findOne({_id: id})
        if(!livro){
            res.status(201).json({msg: "Id não encontrado"})
        }
        try {
            await Livro.deleteOne({_id:id})
            res.status(201).json({msg:"livro deletado"})
        } catch (error) {
            res.status(500).json({msg:"livro não foi deletado"})
        }

    }
}

module.exports= new LivroController();