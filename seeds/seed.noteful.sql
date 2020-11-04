TRUNCATE noteful_folders, noteful_notes RESTART IDENTITY CASCADE;

INSERT INTO
    noteful_folders (id, foldername)
VALUES 
    (
        1,
        'Super'
    ),
    (
        2,
        'Spangley'
    ),
    (
        3,
        'Important'
    );

INSERT INTO 
    noteful_notes (id, notename, modified, folderid, content)
VALUES
    (
        1,
        'Dogs',
        '2019-01-03T00:00:00.000Z',
        1,
        'Dogs are my favorite animal.'
    ),
    (
        2,
        'Cats',
        '2018-08-15T23:00:00.000Z',
        2,
        'I dont like cats as much as dogs.'
    ),
    (
        3,
        'Pigs',
        '2018-03-01T00:00:00.000Z',
        3,
        'Sarah wants a teacup pig.'
    );