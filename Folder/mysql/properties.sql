SELECT id, name, volume('phon.rathana')
FROM products
WHERE volume > $%10
ORDER BY volume DESC
LIMIT 10;
