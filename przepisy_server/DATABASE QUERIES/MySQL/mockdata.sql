INSERT INTO diet_stat ( id_user, type, weight, kcal, FAT, PROTEIN, CARBON )
VALUES
( 1, 0, 97, 2200, 40, 190, 200 ),
( 2, 1, 97, 2200, 40, 190, 200 );

INSERT INTO diet_daily_stat ( id_diet_stat, DAY, MONTH, YEAR)
VALUES
( 1, 13, 6, 2022);


INSERT INTO diet_product_kcal ( id_recipe, name, company, kcal, FAT, PROTEIN, CARBON, id_UNIT)
VALUES
( id_recipe, name, company, kcal, FAT, PROTEIN, CARBON, id_UNIT);

INSERT INTO diet_product_kcal ( name, company, kcal, FAT, PROTEIN, CARBON, id_UNIT)
VALUES
( "serek wiejski", "pilos", 100, 2, 13, 7, 1);



INSERT INTO diet_product ( id_product, size)
VALUES
(1, 200);


INSERT INTO diet_diet_stat ( id_product, id_daily)
VALUES
(1, 1);




/*
id INTEGER NOT NULL PRIMARY KEY auto_increment,
  id_user int(11) NOT NULL,
  type INT(1) NOT NULL,
  weight DOUBLE NOT NULL,
  kcal DOUBLE NOT NULL,
  FAT DOUBLE,
  PROTEIN DOUBLE,
  CARBON DOUBLE,
  FOREIGN KEY (id_user) REFERENCES accounts(id)
);


CREATE TABLE IF NOT EXISTS diet_daily_stat (
  id INTEGER NOT NULL PRIMARY KEY auto_increment,
  id_diet_stat int(11) NOT NULL,
  DAY INT,
  MONTH INT,
  YEAR INT,
  FOREIGN KEY (id_diet_stat) REFERENCES diet_stat(id)
);

CREATE TABLE IF NOT EXISTS diet_product_kcal (
  id INTEGER NOT NULL PRIMARY KEY auto_increment,
  id_recipe int(11),
  name varchar(50) NOT NULL,
  company varchar(50) NOT NULL,
  kcal DOUBLE NOT NULL,
  FAT DOUBLE NOT NULL,
  PROTEIN DOUBLE NOT NULL,
  CARBON DOUBLE NOT NULL,
  id_UNIT int(1) NOT NULL, 
  FOREIGN KEY (id_recipe) REFERENCES recipe(id),
  FOREIGN KEY (id_UNIT) REFERENCES diet_unit(id)
);

CREATE TABLE IF NOT EXISTS diet_product (
  id INTEGER NOT NULL PRIMARY KEY auto_increment,
  id_product int(11) NOT NULL,
  size DOUBLE NOT NULL,
  FOREIGN KEY (id_product) REFERENCES diet_product_kcal(id)
);

CREATE TABLE IF NOT EXISTS diet_diet_stat (
  id_product int(11) NOT NULL,
  id_daily int(11) NOT NULL,
  FOREIGN KEY (id_product) REFERENCES diet_product(id),
  FOREIGN KEY (id_daily) REFERENCES diet_daily_stat(id)
);


*/