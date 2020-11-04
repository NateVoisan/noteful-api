const express = require('express');
const NotesService = require('./notes-service');
const path = require('path');
const notesRouter = express.Router();
const jsonParser = express.json();

notesRouter
  .route('/')
  .get((req, res, next) => {
    NotesService.getAllNotes(req.app.get('db'))
      .then(notes => {
        res.json(notes);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { notename, folderid, content } = req.body;
    const newNote = { notename, folderid, content };

    NotesService.insertNote(req.app.get('db'), newNote)
      .then(note => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl + `/notes/${note.id}`))
          .json(note);
      })
      .catch(next);
  });

module.exports = notesRouter;
