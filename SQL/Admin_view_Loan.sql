-- [Admin views all UNCOMFIRMED properties]

--  SELECT  	P.name, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.isPublic, P.isCommercial, P.ID, P.owner  
-- 			FROM 		Property as P
-- 			WHERE P.ApprovedBy IS NULL 
-- 			ORDER BY P.Name;
 -- *****************************************************************************
-- [Admin views all COMFIRMED properties] 
 SELECT  	P.name, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.isPublic, P.isCommercial, P.ID, P.Approvedby, temp.avgRating  
			FROM 		Property AS P LEFT JOIN
	 				(	SELECT      AVG(V.Rating) AS avgRating, P.ID
						FROM 		property AS P INNER JOIN visit AS V
	 				    ON				P.ID =  V.PropertyID 
						GROUP BY P.ID )	AS temp
						ON 				P.ID =  temp.ID
WHERE P.ApprovedBy is not NULL 
			ORDER BY P.Name;
            
-- ******************************************************************************