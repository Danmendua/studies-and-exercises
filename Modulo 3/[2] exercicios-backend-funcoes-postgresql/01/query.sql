-- 1 
SELECT COUNT(medicamento) AS "Quantidade de medicamentos" FROM farmacia;

-- 2
SELECT MIN(idade) as "Menor idade" FROM usuarios;

-- 3
SELECT MAX(idade) as "Maior idade" FROM usuarios;

-- 4
SELECT ROUND(AVG(idade), 2) as "Média de idade maior ou igual a 18" FROM usuarios WHERE idade >= 18;

-- 5
SELECT SUM(estoque) AS "Total do estoque" FROM farmacia WHERE categoria = 'blue' OR categoria = 'black';

-- 6
SELECT categoria, SUM(estoque) AS "Total do estoque" FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

-- 7
SELECT SUM(estoque) AS "Total do estoque sem categoria" FROM farmacia WHERE categoria IS NULL;

-- 8
SELECT COUNT(*) as "Quantidade de medicamentos sem categoria" FROM farmacia WHERE categoria IS NULL;

-- 9
SELECT CONCAT(medicamento, ' (', categoria, ')') as "Medicamento - Categoria" FROM farmacia WHERE categoria IS NOT NULL ORDER BY categoria ASC;

-- 10
SELECT CONCAT(ID, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ')') AS "ID/Medicamento/Categoria" FROM farmacia ORDER BY id ASC;

-- 11
SELECT nome, idade, cadastro FROM usuarios WHERE cadastro::date BETWEEN '2020-01-01' AND '2020-12-31' ORDER BY cadastro ASC;
-- cast(cadastro as date) <- outra forma de formatar a data

-- 12
SELECT id, nome, idade, email, AGE(CAST(cadastro AS timestamp)) AS "tempo de cadastro" FROM usuarios where idade < 18 ORDER BY idade ASC;

-- 13
SELECT id, nome, idade, email, AGE(CAST(cadastro AS date)) AS "tempo de cadastro" FROM usuarios where idade >= 60 ORDER BY idade ASC;

-- 14
SELECT categoria, COUNT(id) as "quantidade" FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

-- 15
SELECT idade, COUNT(id) as quantidade FROM usuarios WHERE idade >= 18 GROUP BY idade ORDER BY idade ASC;

-- 16 *Enunciado confuso*
SELECT categoria, SUM(estoque) AS "Total do estoque" FROM farmacia GROUP BY categoria LIMIT 3;