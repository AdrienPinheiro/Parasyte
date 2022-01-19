// Imports

const fs = require("fs");
const jwt = require('jsonwebtoken');
const db = require("../models/index");

const User = db.User;
const Forum = db.Forum;

// permet de publier du contenu

exports.post = (req, res, next) => {

    const userId = req.body.user_id

    User.findOne({attributes: ['id'], where: {id : userId}})
    .then(user => {
        if (user == null){
            return res.status(400).json({error: 'Utilisateur non connecté'})
        }
    })
    .catch(error => res.status(500).json({error}))

    const forum = Forum.create({
        id_user: userId,
        title = req.body.title,
        message = req.body.message,
        image = req.file ? `${req.file.filename}`: null,
        video = req.body.video
    })
    .then(forum => res.status(201).json(forum))
    .catch(error => res.status(501).json({error}));
}

// Permet de modifier son contenu

exports.modify = (req, res, next) => {

    const forumId = req.params.forumId

    Forum.update({
        title: req.body.title,
        message: req.body.message
    }, ({attributes: ['id'], where: {id: forumId}}))
    .then(() => res.status(200).json({message: "Modification enregistrée !"}))
    .catch(error => res.status(500).json({error}))
};

// Permet de supprimer son contenu

exports.delete = (req, res, next) => {

    const forumId = req.params.forumId

    Forum.findOne({where: {id: forumId}})
    .then(forum => {
        if(forum.image !== null){
            const filename = forum.image;
            fs.unlink(`../${filename}`, () =>{
                Forum.destroy({attributes: ['id'], where: {id: forumId}})
                .then(() => res.status(200).json({message: 'Post supprimé !'}))
                .catch(error => res.status(402).json({error}))
            })
        }
    })
    .catch(error => res.status(400).json({error}))
}

// Permet de like le contenu

exports.liked = (req, res, next) => {

}

// Permet de récuperer tout les Post dans le forum

exports.getAll = (req, res, next) => {
    Forum.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    })
    .then(forum => res.status(200).json(forum))
    .catch(error => res.status(400).json({error}));
}