-- Visitor Registration --
-- INSERT INTO		user (Email, Username, Password, UserType)
-- VALUES				('abc@gmail.com', 'abc', 'd68fae04506bde7857ff4aa40ebad49d', 'VISITOR');

-- Owner Registration --
	-- Refresh DataBase -- 
-- DELETE FROM		user
-- WHERE 					user.Username = 'abcd';

	-- insert into USER --
-- INSERT INTO		user (Email, Username, Password, UserType)
-- VALUES				('def@gmail.com', 'def', 'd68fae04506bde7857ff4aa40ebad49e', 'OWNER');

	-- insert into PROPERTY --
-- INSERT INTO		property(Name, Size, IsCommercial, IsPublic, Street, City, Zip, PropertyType, Owner, ApprovedBy)
-- VALUES				('abcde', '2', '0', '1', 'abc Street', 'Atlanta', '30023', 'GARDEN', 'farmowner', NULL);

	-- insert into HAS --
-- INSERT INTO 	has(PropertyID, ItemName)
-- VALUES				('4', 'Garlic');

-- ***Note: Can Re-use last 2 for Owner Add New Property *** --



