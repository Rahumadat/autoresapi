const BaseDatos = require('../model/modelo');

    const buscarTodos =  async (req, res) => {
        const datas = await BaseDatos.find();
        res.json(datas);
    }

    const nuevo = async (req, res) => {
        // {
        //     "author": "Pablo Neruda",
        //     "cita": "Puedo escribir los versos..."
        // }
        const body = req.body;
        console.log(body);
        const user = new BaseDatos(body);
        user.save()
        .then( data => res.json(data))
        // .catch(err => {res.json(err));
        .catch(err => {
            res.status(404).json({error:err.message})  });
    }

    const buscarUno = async (req, res) => {
        let id = req.params.id;

        BaseDatos.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    const actualizar = async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        BaseDatos.updateOne({ _id: id}, body )
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    const borrar = async (req, res) => {
        let id = req.params.id;
        BaseDatos.deleteOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

    module.exports={
        buscarTodos,
        nuevo,
        buscarUno,
        actualizar,
        borrar
    }

