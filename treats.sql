-- create table
CREATE TABLE "treats" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(255),
	"description" text,
	"pic" varchar(255)
);

-- Add some data
INSERT INTO treats ("name", "description", "pic")
VALUES 
('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');

-- GET
SELECT * FROM treats;

-- POST
INSERT INTO treats (name, description, pic) VALUES ('Dan Tats', ' A pastry shell filled with custard tasting predominantly of egg', 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181127112559-32-50-sweets-travel-dan-tats.jpg');

-- PUT
UPDATE treats SET description = 'I have really no idea what this is' WHERE id = 2;

-- DELETE
DELETE FROM treats WHERE id = 1;

-- STRETCH GET
SELECT * FROM treats WHERE name LIKE '%' || 'Cup' || '%' OR description LIKE '%' || 'mmm' || '%';
