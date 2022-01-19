// Imports

const fs = require("fs");
const jwt = require('jsonwebtoken');
const db = require("../models/index");

const User = db.User;
const Forum = db.Forum;
const Comment = db.Comment;

// Permet de publier un commentaire

exports.comment = (req, res, next) => {

    const userId = req.params.id;
    const id_forum = req.body.id_post;

    User.findOne({attributes: ['id'], where: {id: userId}})
    .then(user => {
        if (user == null) {
            return res.status(400).json({error: 'Veuillez vous connecter'})
        }
    })
    .catch(error => res.status(500).json({error}))

    const comment = Comment.create({
        id_user: userId,
        id_forum: id_forum,
        message: req.body.message,
        image: req.file ? `${req.file.filename}`: null,
        video: req.body.video
    })
    .then(() => res.status(200).json({message: 'Commentaire créé !'}))
    .catch(error => res.status(500).json({error}))
}

// Permet de modifier un commentaire

exports.modify = (req, res, next) => {
    
    const commentId = req.params.commentId

    Comment.update({
        message: req.body.message,
        image: req.file ? `${req.file.filename}`: null,
        vidéo: req.body.video
    },
    {attributes: ['id'], where: {id: commentId}})
    .then(() => res.status(200).json({message: 'Modifications enregistrées'}))
    .catch(error => res.status(500).json({error}))
}

// Permet de supprimer le commentaire

exports.delete = (req, res, next) => {

    const commentId = req.params.commentId

    Comment.destroy({attributes: ['id'], where: {id: commentId}})
    .then(() => res.status(200).json({message: "Commentaire supprimé !"}))
    .catch(error => res.status(500).json({error}))
}

// Permet de like le commentaire

exports.like = (req, res, next) => {

}

// Permet de récuperer les commentaires

exports.getAll = (req, res, next) => {

    const forumId = req.params.forumId
    Comment.findAll({
        attributes: ['id', 'id_user', 'id_forum', 'message', 'createdAt'],
        where: {id_forum: forumId},
        order: [
            ['createdAt', 'DESC']
        ]
    })
    .then(comment => res.status(200).json(comment))
    .catch(error => res.status(400).json({error}))
}