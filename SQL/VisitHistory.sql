
-- Display Visit History
SELECT P.Name, V.VisitDate, V.Rating
FROM   ((Property AS P 
				INNER JOIN Visit AS V
                ON P.ID = V.PropertyID)
                INNER JOIN User AS U
                ON V.Username = U.Username AND U.UserType = 'VISITOR')
WHERE U.Username = 'billybob'
ORDER BY P.Name;