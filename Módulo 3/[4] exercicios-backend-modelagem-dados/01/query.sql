create table categorias (
  id serial primary key,
  nome varchar(50)
);

create table produtos (
  id serial primary key,
  nome varchar(100) not null,
  descricao text,
  preco integer,
  quantidade_em_estoque integer,
  categoria_id integer references categorias(id)
);

create table clientes (
  cpf char(11) unique,
  nome varchar(150) not null
);

create table vendedores (
  cpf char(11) unique,
  nome varchar(150) not null
);

create table pedidos (
	id serial primary key,
  valor integer not null,
  cliente_cpf char(11) not null references clientes(cpf),
  vendedor_cpf char(11) not null references vendedores(cpf)
);

create table itens_do_pedido (
  id serial primary key,
  pedido_id integer not null references pedidos(id),
  quantidade integer,
  produto_id integer not null references produtos(id)
);

-- 1
insert into categorias (nome) values ('frutas'), ('verduras'), ('massa'), ('bebidas'), ('utilidades');

-- 2
insert into produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id) values
('Mamão', 'Rico em vitamina A, potássio e vitamina C',	300,	123,	1),
('Maça',	'Fonte de potássio e fibras.',	90,	34, 1),
('Cebola',	'Rico em quercetina, antocianinas, vitaminas do complexo B, C.',	50,	76, 2),
('Abacate',	'NÃO CONTÉM GLÚTEN.',	150,	64, 1),
('Tomate',	'Rico em vitaminas A, B e C.',	125,	88, 2),
('Acelga',	'NÃO CONTÉM GLÚTEN.',	235,	13, 2),
('Macarrão parafuso',	'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais',	690,	5, 3),
('Massa para lasanha',	'Uma reunião de família precisa ter comida boa e muita alegria.',	875,	19, 3),
('Refrigerante coca cola lata',	'Sabor original',	350,	189, 4),
('Refrigerante Pepsi 2l',	'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.',	700,	12, 4),
('Cerveja Heineken 600ml',	'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado',	1200,	500, 4),
('Agua mineral sem gás',	'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.',	130,	478, 4),
('Vassoura',	'Pigmento, matéria sintética e metal.',	2350,	30, 5),
('Saco para lixo',	'Reforçado para garantir mais segurança',	1340,	90, 5),
('Escova dental',	'Faça uma limpeza profunda com a tecnologia inovadora',	1000,	44, 5),
('Balde para lixo 50l',	'Possui tampa e fabricado com material reciclado',	2290,	55, 5),
('Manga',	'Rico em Vitamina A, potássio e vitamina C',	198,	176, 4),
('Uva',	'NÃO CONTÉM GLÚTEN.',	420,	90, 4);

-- 3
insert into clientes (cpf, nome) values
('80371350042',	'José Augusto Silva'),
('67642869061',	'Antonio Oliveira'),
('63193310034',	'Ana Rodrigues'),
('75670505018',	'Maria da Conceição');

-- 4
insert into vendedores (cpf, nome) values
('82539841031',	'Rodrigo Sampaio'),
('23262546003',	'Beatriz Souza Santos'),
('28007155023',	'Carlos Eduardo');


-- 5

-- a)

-- insert into pedidos (cliente_cpf, vendedor_cpf, valor) values
-- ((select cpf from clientes where nome = 'José Augusto Silva'), (select cpf from vendedores where nome = 'Carlos Eduardo'), ((1 * 300) + (1 * 700) + (6 * 1200) + (1 * 1000) + (5 * 90)));
insert into pedidos (cliente_cpf, vendedor_cpf, valor) values
(63193310034, 23262546003, ((1 * 300) + (1 * 700) + (6 * 1200) + (1 * 1000) + (5 * 90)));

insert into itens_do_pedido (pedido_id, quantidade, produto_id) 
values 
(1, 1, (select id from produtos where nome like 'Mamão' or id = 1)),
(1, 1, (select id from produtos where nome like 'Refrigerante Pepsi 2l' or id = 10)),
(1, 6, (select id from produtos where nome like 'Cerveja Heineken 600ml 6' or id = 11)),
(1, 1, (select id from produtos where nome like 'Escova dental' or id = 15)),
(1, 5, (select id from produtos where nome like 'Maçãs' or id = 2));

update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Mamão' or id = 1; -- 1 Mamão
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Refrigerante Pepsi 2l' or id = 10; -- 1 Pepsi
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where nome = 'Cerveja Heineken 600ml 6' or id = 11; -- 6 Heinekens
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Escova dental' or id = 15; -- 1 Escova dental
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where nome = 'Maçãs' or id = 2; -- 5 Maçãs

-- b)
insert into pedidos (cliente_cpf, vendedor_cpf, valor) values
(63193310034, 23262546003, ((10 * 198) + (3 * 420) + (5 * 300) + (10 * 125) + (2 * 235)));

insert into itens_do_pedido (pedido_id, quantidade, produto_id) 
values 
(2, 10, (select id from produtos where nome like 'Manga' or id = 17)),
(2, 3, (select id from produtos where nome like 'Uva' or id = 18)),
(2, 5, (select id from produtos where nome like 'Mamão' or id = 1)),
(2, 10, (select id from produtos where nome like 'Tomate' or id = 5)),
(2, 2, (select id from produtos where nome like 'Acelga' or id = 6));

update produtos set quantidade_em_estoque = quantidade_em_estoque - 10 where nome = 'Manga' or id = 17; -- 10 Mangas
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where nome = 'Uva' or id = 18; -- 3 Uvas
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where nome = 'Mamão' or id = 1; -- 5 Mamões
update produtos set quantidade_em_estoque = quantidade_em_estoque - 10 where nome = 'Tomate' or id = 5; -- 10 Tomates
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where nome = 'Acelga' or id = 6; -- 2 Acelgas