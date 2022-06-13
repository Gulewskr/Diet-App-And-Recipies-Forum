/* USER DAILY */
SELECT 
ds.kcal, ds.FAT, ds.PROTEIN, ds.CARBON, dayS.id
FROM
diet_stat ds,
diet_daily_stat dayS
WHERE
ds.id_user = 1 AND
ds.id = dayS.id_diet_stat AND
dayS.DAY = 13 AND
dayS.MONTH = 6 AND
dayS.YEAR = 2022

/* DAILY PRODUCTS */
SELECT 
*
FROM
diet_daily_stat dayS,
diet_diet_stat ds,
diet_product product
WHERE
ds.id_daily = dayS.id AND
ds.id_product = product.id


