// Imports

const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models/index");

const User = db.User;

// Regex

const emailRegex = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z0-9\d@$!%*?&]{8,}$/; 

// Enregistrement de l'utilisateur
// Crypte le mot de passe et l'email
// Passe la main à la fonction login
exports.signup = (req, res, next) => {
    
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const pseudo = req.body.pseudo;
    const email = req.body.email;
    const password = req.body.password;

    if(firstname == null || lastname == null || pseudo == null || email == null || password == null){
        return res.status(400).json({error: "Vous n'avez pas rempli tous les champs obligatoires"})
    } else if(!password.match(passwordRegex)){
        return res.status(400).json({error: "Le mot de passe doit être au minimum de 8 caractères avec une majuscule, un chiffre et un caractère spécial"})
    } else if (!email.match(emailRegex)){
        return res.status(400).json({error: "Email non valide"})
    }

    User.findOne({attribute: ["email"], where: {email: email}})
    .then((user) =>{
        if(user){
            return res.status(400).json({error: "Utilisateur déjà existant"})
        } else if(!user) {
            bcrypt.hash(password,10)
            .then(hash => {
                const user = new User({
                    firstname: firstname,
                    lastname: lastname,
                    pseudo: pseudo,
                    email: email,
                    password: hash,
                    isAdmin: 0
                });
                user.save()
                    .then(() => res.status(201).json({message: 'Utilisateur créé !'}))
                    .catch(error => res.status(400).json({error: "Erreur lors de l'enregistrement de l'utilisateur"}));
            })
            .catch(error => res.status(409).json({error: "Problème lors de l'enregistrement du mot de passe"}));
        }})
        .catch(error => res.status(500).json({error: "Erreur serveur"}))
}


// Permet de se connecter en vérifiant par l'email si l'utilisateur existe
// Assigne un token qui expire en 72h

exports.login = (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password

    const createToken = (id) => {
        return jwt.sign({id}, process.env.SECRET_TOKEN, {
            expiresIn: 3 * 24 * 60 * 60 * 1000
        })
    };

    User.findOne({attribute: ["email"], where: {email:email}})
    .then(user => {
        if(!user){
            return res.status(401).json({error: "Utilisateur non trouvé"});
        } else if(user) {
            bcrypt.compare(password, user.password)
            .then(valid => {
                if(!valid) {
                    return res.status(401).json({error: "Email ou mot de passe incorrect"});
                }
                else if(valid){
                    try{
                        const token = createToken(user.id);
                        res.status(200).json({session_id: token});
                    } catch (err){
                        res.status(200).json({err})
                    }
                }
            })
        }
    })
}

// Permet de rechercher un utilisateur

exports.getOne = (req, res, next) => {
    const userId = req.body.id
    User.findOne({attribute: ['firstname', 'lastname', 'pseudo', 'isAdmin'], where: {id: userId}})
    .then((user) => res.status(200).json({user}))
    .catch(error => res.status(400).json({error}));
}