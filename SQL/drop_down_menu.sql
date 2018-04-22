-- DROP DOWN MENU --

	-- Property Type --
-- SELECT 	DISTINCT P.PropertyType
-- FROM		Property as P;	

	-- Is Public --
-- SELECT 	DISTINCT P.IsPublic
-- FROM		Property as P;

	-- Is Commercial --
-- SELECT		DISTINCT P.IsCommercial
-- FROM 		Property as P;

	-- Animal (From Approved List) --
-- SELECT 		DISTINCT F.Name
-- FROM 		FarmItem as F
-- WHERE		F.IsApproved = '1' AND F.Type = 'ANIMAL';

	-- Crops (From Approved List) --
-- SELECT		DISTINCT F.Name
-- FROM			FarmItem as F
-- WHERE		F.IsApproved = '1' AND F.Type != 'ANIMAL';

	-- Crop Type (Request New Crop) --
-- SELECT		DISTINCT F.Type
-- FROM 		FarmItem as F
-- WHERE		F.Type != 'ANIMAL';

	-- Animal/Crop Type -- 
-- SELECT 		DISTINCT F.Type
-- FROM 		FarmItem as F;