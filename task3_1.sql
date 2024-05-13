CREATE TABLE "user" (
    id int,
    firstName varchar(255),
    lastName varchar(255),
    email varchar(255),
    cultureID INT,
    deleted bit,
    country varchar(255),
    isRevokeAccess bit,
    created date  -- Postgre SQL doesn't have "time" so I used "date" instead of "datetime"
);



INSERT INTO "user" (id, "firstName", "lastName", email, "cultureID", deleted, country, "isRevokeAccess", created)
VALUES
(1, 'Victor', 'Shevchenko', 'vs@gmail.com', 1033, TRUE, 'US', FALSE, '2011-04-05'),
(2, 'Oleksandr', 'Petrenko', 'op@gmail.com', 1034, FALSE, 'UA', FALSE, '2014-05-01'),
(3, 'Victor', 'Tarasenko', 'vt@gmail.com', 1033, TRUE, 'US', TRUE, '2015-07-03'),
(4, 'Sergiy', 'Ivanenko', 'sergiy@gmail.com', 1046, FALSE, 'UA', TRUE, '2010-02-02'),
(5, 'Vitalii', 'Danilchenko', 'shumko@gmail.com', 1031, FALSE, 'UA', TRUE, '2014-05-01'),
(6, 'Joe', 'Dou', 'joe@gmail.com', 1032, FALSE, 'US', TRUE, '2009-01-01'),
(7, 'Marko', 'Polo', 'marko@gmail.com', 1033, TRUE, 'UA', TRUE, '2015-07-03');




CREATE TABLE "group" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    created TIMESTAMP
);

INSERT INTO "group" (id, name, created)
VALUES
(10, 'Support', '2010-02-02'),
(12, 'Dev team', '2010-02-03'),
(13, 'Apps team', '2011-05-06'),
(14, 'TEST - dev team', '2013-05-06'),
(15, 'Guest', '2014-02-02'),
(16, 'TEST-QA-team', '2014-02-02'),
(17, 'TEST-team', '2011-01-07');

CREATE TABLE "groupMembership" (
    id SERIAL PRIMARY KEY,
    userID INT,
    groupID INT,
    created TIMESTAMP
);

INSERT INTO "groupMembership" (id, userID, groupID, created)
VALUES
(110, 2, 10, '2010-02-02'),
(112, 3, 15, '2010-02-03'),
(114, 1, 10, '2014-02-02'),
(115, 1, 17, '2011-05-02'),
(117, 4, 12, '2014-07-13'),
(120, 5, 15, '2014-06-15');


