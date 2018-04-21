-- Display Pending Animal/Crops

SELECT  F.Name, F.Type

FROM 	FarmItem AS F

WHERE   F.IsApproved = '0'; 