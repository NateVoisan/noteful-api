function makeFoldersArray() {
  return [
    {
      id: 1,
      folderName: 'Super',
    },
    {
      id: 2,
      folderName: 'Spangley',
    },
    {
      id: 3,
      folderName: 'Important ',
    },
  ];
}

function makeNotesArray() {
  return [
    {
      id: 1,
      name: 'Dogs',
      modified: '2019-01-03T00:00:00.000Z',
      folderId: 1,
      content: 'Dogs are my favorite animal.',
    },
    {
      id: 2,
      name: 'Cats',
      modified: '2018-08-15T23:00:00.000Z',
      folderId: 2,
      content: 'I dont like cats as much as dogs.',
    },
    {
      id: 3,
      name: 'Pigs',
      modified: '2018-03-01T00:00:00.000Z',
      folderId: 3,
      content: 'Sarah wants a teacup pig.',
    },
  ];
}

module.exports = {
  makeFoldersArray,
  makeNotesArray,
};
