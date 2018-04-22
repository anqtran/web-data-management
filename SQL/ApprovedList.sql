-- Display Approved Animal/Crops

SELECT  F.Name, F.Type

FROM 	FarmItem AS F

WHERE   F.IsApproved = '1'; 


