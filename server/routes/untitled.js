  SELECT  	P.Name, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.isPublic, P.isCommercial, P.ID, P.ApprovedBy, temp.numberofVisit, temp.avgRating  
  FROM 		Property AS P LEFT JOIN
	  				(	SELECT  	COUNT(V.propertyID) AS numberOfVisit, AVG(V.Rating) AS avgRating, P.ID
	  					FROM 		property AS P INNER JOIN visit AS V
	  				  ON				P.ID =  V.PropertyID AND P.owner = (?)
	  					GROUP BY P.ID )	AS temp
                          ON 				P.ID =  temp.ID
  WHERE P.ApprovedBy IS NOT NULL AND P.owner = (?)
  ORDER BY P.Name;