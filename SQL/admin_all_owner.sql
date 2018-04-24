-- Admin --
	-- Display All Owners --
 SELECT 				U.Username, U.Email, temp.NumProps
 FROM 				user AS U
 							LEFT JOIN (SELECT P.Owner, COUNT(P.Owner) AS NumProps
 									FROM property AS P INNER JOIN user AS U
                                     ON U.Username = P.Owner
                                     GROUP BY P.Owner) AS temp
 							ON U.Username = temp.Owner
 WHERE 				UserType = 'OWNER';

	 Delete Owner Account 
 DELETE FROM		user
 WHERE					user.Username = 'def';