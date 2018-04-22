  Owner 
  welcome screen: 

  SELECT  	P.Name, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.isPublic, P.isCommercial, P.ID, P.ApprovedBy, temp.numberofVisit, temp.avgRating  
  FROM 		Property AS P LEFT JOIN
	  				(	SELECT  	COUNT(V.propertyID) AS numberOfVisit, AVG(V.Rating) AS avgRating, P.ID
	  					FROM 		property AS P INNER JOIN visit AS V
	  				  ON				P.ID =  V.PropertyID AND P.owner = 'gardenowner'
	  					GROUP BY P.ID )	AS temp
                          ON 				P.ID =  temp.ID
  WHERE P.ApprovedBy IS NOT NULL AND P.owner = 'gardenowner'
  ORDER BY P.Name;

######################################################################################
  Owner X's view of others' properties
  SELECT  	P.Name, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.isPublic, P.isCommercial, P.ID, P.ApprovedBy, temp.numberofVisit, temp.avgRating  
  FROM 		Property AS P LEFT JOIN
	  				(	SELECT  	COUNT(V.propertyID) AS numberOfVisit, AVG(V.Rating) AS avgRating, P.ID
  						FROM 		property AS P INNER JOIN visit AS V
                         ON				P.ID =  V.PropertyID AND P.owner != 'gardenowner'
	  					GROUP BY P.ID )	AS temp
                          ON 				P.ID =  temp.ID
  WHERE P.ApprovedBy IS NOT NULL AND P.owner != 'gardenowner'
  ORDER BY P.Name;

###########################################################################################
  Property Details
   SELECT 	P.Name,  U.Username, U.Email, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.isPublic, P.isCommercial, P.ID, temp1.numberofVisit, temp1.avgRating, H.ItemName		
   FROM 			Property AS P 
   						LEFT JOIN has AS H
               			ON P.ID = H.PropertyID
                          LEFT JOIN user as U
   						ON U.Username = P.owner
               			LEFT JOIN
  							(SELECT   COUNT(V.propertyID ) AS numberOfVisit, AVG(V.Rating) AS avgRating, P.ID
  								FROM 		property AS P INNER JOIN visit AS V
  								ON			P.ID =  V.PropertyID
  								GROUP BY P.ID )	AS temp1
  								ON 				P.ID =  temp1.ID                         
  WHERE 			P.Name = 'Kenari Company Farm' and P.ApprovedBy IS NOT NULL;   USER INPUT HERE  

    SELECT	  DISTINCT F.type 
               FROM         has as H
  						LEFT JOIN farmitem as F
                          ON H.ItemName = F.Name
  			 WHERE H.ItemName = 'cow'	

########################################################
  #Owner's Manage Property
  SELECT 	 P.Name, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.ID, H.ItemName, 
  			 FROM 		Property AS P 
  					LEFT JOIN has AS H
  					ON P.ID = H.PropertyID
						
  WHERE 			P.Name = 'Kenari Company Farm';   USER INPUT HERE  
 
   SELECT	  DISTINCT F.type 
               FROM         has as H
  						LEFT JOIN farmitem as F
                          ON H.ItemName = F.Name
  			 WHERE H.ItemName = 'cow'					
  **************************************************
	  [Public Dropdown]  
   SELECT 			DISTINCT P.IsPublic
   FROM				property AS P;
  **************************************************
	  [Commercial Dropdown]  
  SELECT			DISTINCT P.IsCommercial
  FROM				property AS P;
  **************************************************
		  [Add approved item to property Dropdown]  
  SELECT			DISTINCT F.name, F.Type
  					FROM			farmitem AS F
  					WHERE			F.isApproved = '1'

   INSERT INTO 	has   (itemName, propertyID)
  				VALUE ('CHICKEN', '0')
  **************************************************

	  [Delete has items]   bugggggggg
    
  DELETE  FROM	has
  	WHERE	has.ItemName = 'CHICKEN' AND has.PropertyID = '0';

  **************************************************	
            [Request New Farm item to be added to property]  
  INSERT INTO			farmitem (name, type, isapproved)
  VALUES					('', '', NULL);

  ***************************************************
	  [Update Property to Null]  
      BUG: once update, is_valid should be reset?   
  JUST FOR FUN insert into			property  (id, Name, Size, IsCommercial,  IsPublic, Street, City, Zip, propertytype,owner, approvedby)
  			values		('11', '12345',  '11', '0', '1', '342', 'Atlanta', '30043',  'farm',  'ceo',  NULL);
			
  UPDATE 			property AS P
   			SET  			P.Name ='Prop11', P.Street = '12345', P.City = 'Atlanta', P.Zip= '30043', P.Size = '20000', P.IsPublic = '0', P.IsCommercial = '0', P.approvedby = NULL
  			WHERE 			P.id = '11';

  Admin manage table
   UPDATE 			property AS P
   SET  				P.Name ='Prop11', P.Street = '12345', P.City = 'Atlanta', P.Zip= '30043', P.Size = '11',
  						P.IsPublic = '0', P.IsCommercial = '0', P.approvedby = ''
   WHERE 			P.Name = 'Prop10';

  **************************************************************
	  [Delete Property]  
DELETE FROM	property
 WHERE property.id = '11';
  **************************************************************











