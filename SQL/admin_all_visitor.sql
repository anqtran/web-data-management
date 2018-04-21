-- Admin --
	-- Display All Visitors --
-- SELECT 				U.Username, U.Email, tempV.LoggedVisits
-- FROM 				user AS U
-- 							LEFT JOIN (SELECT V.Username, COUNT(V.Username) AS LoggedVisits
-- 									FROM visit AS V INNER JOIN user AS U
--                                     ON U.Username = V.Username
--                                     GROUP BY V.Username) AS tempV
-- 							ON U.Username = tempV.Username
-- WHERE 				UserType = 'VISITOR';

	-- Delete Visitor Account --
-- DELETE FROM	user
-- WHERE				user.Username = 'temp';

	-- Delete Log History --
-- DELETE FROM		visit
-- WHERE					visit.Username = 'temp';