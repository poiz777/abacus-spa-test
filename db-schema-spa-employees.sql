DROP TABLE IF EXISTS `employees`;

CREATE TABLE `employees` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `employeeNumber` int(11) DEFAULT NULL,
  `firstName` varchar(64) DEFAULT NULL,
  `lastName` varchar(64) DEFAULT NULL,
  `department` varchar(64) DEFAULT NULL,
  `position` varchar(64) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`id`, `employeeNumber`, `firstName`, `lastName`, `department`, `position`, `thumbnail`)
VALUES
	(1,180,'James','Talbot','IT','Project Manager','http://sim-rest.poiz.me/api-data/employees/james-talbot.jpg'),
	(2,185,'Martina','Wenger','Graphics','Screen Designer','http://sim-rest.poiz.me/api-data/employees/martina-wenger.jpg'),
	(3,190,'Christian','Meyer','Human Resources','HR Director','http://sim-rest.poiz.me/api-data/employees/christian-meyer.jpg'),
	(4,195,'Franklin','Owen','Graphics','3D Animations','http://sim-rest.poiz.me/api-data/employees/franklin-owen.jpg'),
	(5,200,'Celine','Oswald','Social Network','Public Relations','http://sim-rest.poiz.me/api-data/employees/celine-oswald.jpg'),
	(6,205,'Kinsley','Dalton','IR','Application Architect','http://sim-rest.poiz.me/api-data/employees/kingsley-dalton.jpg'),
	(7,210,'Victor','Zimmermann','IT','Frontend Engineer','http://sim-rest.poiz.me/api-data/employees/victor-zimmermann.jpg'),
	(8,215,'Nina','Sheldon','Management','Product Owner','http://sim-rest.poiz.me/api-data/employees/nina-sheldon.jpg');

