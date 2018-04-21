-- Property Details for Visitor
SELECT 	P.Name,  U.Username, U.Email, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.isPublic, P.isCommercial, P.ID, P.ApprovedBy, temp1.Visits, temp1.avgRating, H.ItemName		
FROM 			Property AS P 
 						LEFT JOIN has AS H
             			ON P.ID = H.PropertyID
                        LEFT JOIN user as U
  						ON U.Username = P.owner
             			LEFT JOIN
							(SELECT   COUNT(V.propertyID ) AS Visits, AVG(V.Rating) AS avgRating, P.ID
								FROM 		property AS P INNER JOIN visit AS V
								ON			P.ID =  V.PropertyID
								GROUP BY P.ID )	AS temp1
 								ON 				P.ID =  temp1.ID                         
WHERE 			P.Name = 'Georgia Tech Garden' and P.ApprovedBy IS NOT NULL;
