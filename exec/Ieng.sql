-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: j7d209.p.ssafy.io    Database: test
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `diaries`
--

DROP TABLE IF EXISTS `diaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diaries` (
  `diary_seq` bigint NOT NULL AUTO_INCREMENT,
  `diary_content` varchar(255) DEFAULT NULL,
  `diary_dttm` varchar(255) DEFAULT NULL,
  `diary_emotion` varchar(255) DEFAULT NULL,
  `diary_picture_path` varchar(255) DEFAULT NULL,
  `member_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`diary_seq`),
  KEY `FKilp6yet5xlus245wuis3lr8iq` (`member_seq`),
  CONSTRAINT `FKilp6yet5xlus245wuis3lr8iq` FOREIGN KEY (`member_seq`) REFERENCES `members` (`member_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diaries`
--

LOCK TABLES `diaries` WRITE;
/*!40000 ALTER TABLE `diaries` DISABLE KEYS */;
INSERT INTO `diaries` VALUES (52,'field','2022-10-04','Tired','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/kyon0723@naver.com/diary/2022-10-04/ed017d70-a52c-4c6e-ab40-9ffa0393139b.jpg',154),(70,'I dont like choco\nhaha\nbye','2022-10-04','Angry','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/shd7561@gmail.com/diary/2022-10-04/849304cc-0d7f-4975-9478-877174df0677.jpg',223),(73,'It is very good illustration. I love sky.','2022-10-04','Happy','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/admin@admin.com/diary/2022-10-04/4c997442-deea-433d-99c4-8ff711591e55.jpg',43),(74,'smile smile! im so happy.. night and night','2022-10-04','Fun','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/tgd_5753@naver.com/diary/2022-10-04/5f638879-5eca-4cd9-93a4-3bd3931893de.png',225),(75,'Time flies like an arrow','2022-10-05','Fun','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/pink5910@naver.com/diary/2022-10-05/efeaad7f-6027-4d42-85ba-8094a6200365.jpg',226),(76,'해피해피해피홈','2022-10-05','Fun','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/a47833791@gmail.com/diary/2022-10-05/980c152e-fe95-4e76-9226-a07e118fef19.jfif',228),(77,'summer vector','2022-10-05','Tired','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/yellowoo12@naver.com/diary/2022-10-05/81cf4a7a-ed62-4f33-8368-8b588913e00f.jpg',229),(79,'landscape road solar grass','2022-10-05','Fun','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/sasakiryu723@gmail.com/diary/2022-10-05/16a381e2-a10d-4686-b5c8-d5d6e07140dc.jpg',233),(80,'I make will coffee','2022-10-05','Fun','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/tgd5753@gmail.com/diary/2022-10-05/e1ccefa4-fb31-4c8f-9b4c-ec1259b32201.png',227),(85,'I saw a dog today. And this dog was baby and so tiny. I like adorable and furry dog. ','2022-10-05','Happy','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/inseok9876@gmail.com/diary/2022-10-05/c584d342-8f7b-45ba-8f28-de2fd71574c8.jpg',220),(94,'Road','2022-10-05','Shy','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/kyon0723@naver.com/diary/2022-10-05/01d28ba1-4b7a-434c-b37a-ba82250f8e68.jpg',154),(95,'asdfasdfasdfadsfasdfasdfasdfadsfasdfasdfadsfasdfasdfasdfasdfasdfasdfasdfasdfasdfadsfafdsasdfasdf landscape ','2022-10-05','SoSo','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/lkr0943@gmail.com/diary/2022-10-05/225e5d11-9096-4219-88b2-ac39ec97541a.jpg',234),(100,'countryside grass no person travel outdoors summer\nnature rural sky\nlandscape tree road guidance field wood hill ','2022-10-06','Shy','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/sasakiryu723@gmail.com/diary/2022-10-06/56d68e22-d562-4623-a4db-b1e5fcb681c7.jpg',233),(101,'grass is downy nature is obedience.','2022-10-06','Curious','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/inseok9876@gmail.com/diary/2022-10-06/14a5c7b9-a78e-404a-bf04-2cb4c30c7d73.jpg',220),(104,'summer \nhill \ntree \ntropical','2022-10-06','Shy','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/lkr0943@gmail.com/diary/2022-10-06/e9c37d87-eda9-4697-af43-a44feb3b117c.jpg',234),(109,'fucking sky bright art. \nFucking Tomboy \nThe dog is obedience.','2022-10-06','Fun','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/hwoo225o@gmail.com/diary/2022-10-06/5b2adb8c-8346-43b4-b4db-aa0e563f3564.jpg',221),(113,'Nature tree \nrOad fair weather \nNo person summer \nguidance grass','2022-10-06','Fun','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/kyon0723@naver.com/diary/2022-10-06/92025837-fb9e-4589-b21d-4a85dc95118f.jpg',154),(114,'Today lunch is very delicous.\nI love ramen.','2022-10-06','Happy','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/admin@admin.com/diary/2022-10-06/4e67c275-e1ad-4c40-af24-2a5751b371d3.jpg',43),(115,'I watched drama. It was fun. ','2022-10-07','Fun','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/sunzero3233@gmail.com/diary/2022-10-07/8e1f2b68-d0b3-43dc-a9be-57069e83afcb.jpg',244);
/*!40000 ALTER TABLE `diaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diaries_keywords`
--

DROP TABLE IF EXISTS `diaries_keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diaries_keywords` (
  `diary_keyword_seq` bigint NOT NULL AUTO_INCREMENT,
  `diary_keyword` varchar(255) DEFAULT NULL,
  `diary_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`diary_keyword_seq`),
  KEY `FK91gsr4e9iceeoar5mv0gvm0xx` (`diary_seq`),
  CONSTRAINT `FK91gsr4e9iceeoar5mv0gvm0xx` FOREIGN KEY (`diary_seq`) REFERENCES `diaries` (`diary_seq`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=215 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diaries_keywords`
--

LOCK TABLES `diaries_keywords` WRITE;
/*!40000 ALTER TABLE `diaries_keywords` DISABLE KEYS */;
INSERT INTO `diaries_keywords` VALUES (82,'field',52),(122,'illustration',73),(123,'sky',73),(124,'smile',74),(125,'summer',77),(128,'landscape',79),(129,'road',79),(130,'grass',79),(136,'dog',85),(137,'fur',85),(138,'baby',85),(139,'tiny',85),(140,'adorable',85),(144,'road',94),(145,'landscape',95),(165,'countryside',100),(166,'grass',100),(167,'no person',100),(168,'travel',100),(169,'outdoors',100),(170,'summer',100),(171,'nature',100),(172,'rural',100),(173,'sky',100),(174,'landscape',100),(175,'tree',100),(176,'road',100),(177,'guidance',100),(178,'country',100),(179,'field',100),(180,'wood',100),(181,'hill',100),(182,'grass',101),(183,'downy',101),(184,'nature',101),(189,'summer',104),(190,'hill',104),(191,'tree',104),(192,'tropical',104),(200,'sky',109),(201,'bright',109),(202,'art',109),(205,'nature',113),(206,'tree',113),(207,'road',113),(208,'fair weather',113),(209,'no person',113),(210,'summer',113),(211,'guidance',113),(212,'grass',113),(213,'ramen',114),(214,'lunch',114);
/*!40000 ALTER TABLE `diaries_keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `member_seq` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `ymd` datetime NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `picture_path` varchar(255) DEFAULT NULL,
  `provider` varchar(255) NOT NULL,
  `refresh_token` varchar(255) NOT NULL,
  PRIMARY KEY (`member_seq`),
  UNIQUE KEY `UK_9d30a9u1qpg8eou0otgkwrp5d` (`email`),
  UNIQUE KEY `UK_e6u9u9ypoc7oldnpxdjwcdx3` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=245 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (43,'admin@admin.com','1993-11-01 00:00:00','admin13','1234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/admin@admin.com/profile/b767c827-4a1d-48b7-af57-425837059dd5.jpg','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4NTAxNzJ9.BGg07ZVKGOdO-49yW31MY5Tpj-Vs_7ucbWjKA5mhECg'),(46,'admin2@admin.com','1993-11-17 00:00:00','admin','1234',NULL,'ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI1NTk2MDZ9.H-snE76X1uPZp7Qj-vot0PkXrwIxkpobflXgtbs-9oU'),(116,'admin33@admin.com','1993-11-16 00:00:00','tts','1234',NULL,'ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzE5ODc2MDF9.u49hPYJXTVdmUzg-Zq66dS5Y_wxEou2LLFtpFHkXeV0'),(154,'kyon0723@naver.com','1994-07-23 00:00:00','KK','1234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/kyon0723@naver.com/profile/5015d9d5-e16f-4c6c-92dd-2bd0e079f728.jpg','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4Mzk5NjB9.vHueBKByL9MZp4F6WbrseouC_FrNb67QjL_UuWK4RMU'),(194,'test@test.com','2002-02-02 00:00:00','짱구','1234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/test@test.com/profile/5125dac2-30a1-4605-8b7e-2f03c1602ec9.jfif','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4NDM1MDd9.WPJ5huLCSlhgJOkzfwiTvWXp1td8QwTx0MSY_TfZxtQ'),(197,'test2133@test.com','1999-06-22 00:00:00','test3244324','1234',NULL,'ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzIzODgzNzJ9.Qd5VOSt6k-5PSepLfzGgmXFgzrb-UTtcgbeV7bFMYBY'),(199,'test999@admin.com','1993-11-16 00:00:00','999','1234',NULL,'ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzIzOTAwMzV9.uuuFTGoQ0RA2U__fEzhL3FT1nEybCMy4rRgOZ8Wc4Jo'),(212,'inseok@nnaa.com','1993-11-17 00:00:00','aff','1234',NULL,'ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI2MzQ4Njd9.HqQ2h7Qc5pStTv175-Yb8yLgbuxc3jWdxOWTPtl7iyM'),(216,'inseinseinsein@adminaa.com','1993-11-16 00:00:00','ttfjdsafj','1234','user/inseinseinsein@adminaa.com/profile/52f2408e-5aec-4c24-8896-5a26645d6e4d.jpg','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI1ODA5MjF9.a6tJn0aV7PURMIdPnwoMdK5loahJIwZvcOaK7V-_dB0'),(218,'inseinse1sein@adminaa.com','1993-11-16 00:00:00','ttfjdsafdsfj','1234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/inseinse1sein@adminaa.com/profile/febeb61a-8042-4c04-bf02-024508224881.jpg','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI1ODgwMTl9.nrMIULzm92Ycjxid0nbOEPEchdgxVCCLUq5AT2ym62Q'),(219,'admin99@admin.com','1993-11-17 00:00:00','admin99','1234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/admin99@admin.com/profile/1f751cbd-3bc2-447a-8ce5-45c7683b1ceb.jpg','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI1ODgwNzV9.T1WJ_0Q7CSju6fh1S49lRe2VTbEmFKtl0CqRjR1CD1A'),(220,'inseok9876@gmail.com','1993-11-16 00:00:00','알로',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/inseok9876@gmail.com/profile/e0f58bc8-e651-43bd-8d02-1ffe2c55f53a.jpg','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4NTE0MDR9.3qpwiUNzq5LtNqbAg2jgoblTFjiQL0zK8Imj01FLnjA'),(221,'hwoo225o@gmail.com','1997-02-25 00:00:00','고라파덕이요',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/hwoo225o@gmail.com/profile/16663dd1-42dc-4d5e-b7a1-058ec4bdb242.jpg','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4NTE2MzZ9.TsWzBY8NZzLcawnrIyvDOTtLK1SW5hxIvEL0LNpGSWc'),(222,'mstoto23@naver.com','1998-04-03 00:00:00','1234','1234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/mstoto23@naver.com/profile/a8d31b79-ca07-4bc8-b952-5857167d3728.jpg','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI2MzQ5Njh9.zD81hzSRbufdKWghUoFYzvIYPs_EthMpR8UsPNUw6kc'),(223,'shd7561@gmail.com','1997-02-25 00:00:00','dsafadfa',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/shd7561@gmail.com/profile/78df7bc5-8bfd-47f4-8000-08b106a543b9.jpg','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI2NDk3OTR9.zjfyW6FYDXveGQmX-Lt19XRruQPEQn5XGthhSxglPqQ'),(224,'windy82581@naver.com','1996-08-25 00:00:00','test0001',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/windy82581@naver.com/profile/c310d208-e21b-4d4d-a13f-6826fba5879f.png','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI2NjExMzJ9.D43hZ28dP_HFqxMjoI6jYPNtvS0zYiSTERkeTtAujBM'),(225,'tgd_5753@naver.com','1999-08-11 00:00:00','iiiii','12341234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/tgd_5753@naver.com/profile/3d21ff70-a867-49e6-a6f6-382126081756.png','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI2NjcwMzd9.NsC-sqSBdQHjQHcZXAXnMkCpWcUfJAAmOloaK9YgF90'),(226,'pink5910@naver.com','1999-07-02 00:00:00','aa','1234123412','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/pink5910@naver.com/profile/45e7defb-e2ca-41e9-8e97-a2b6389457a8.png','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI2ODAzMjF9.iw4vQEZ0SGBp1nNXyJsgdzKClClF4oI-0n8MULuGOpI'),(227,'tgd5753@gmail.com','1998-11-30 00:00:00','zz',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/tgd5753@gmail.com/profile/fe989a34-dd2d-4a65-9b9e-5cd77b8eca8f.png','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4NDI3NTh9.3i-DBfP2YkZYDRJt8Wf4uwTwBt0IBoWGccI47hFFu4M'),(228,'a47833791@gmail.com','1997-02-23 00:00:00','핑핑',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/a47833791@gmail.com/profile/b4703edd-d86a-4c5b-a24f-eea2736384f9.jfif','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI3MTE2ODd9.45le8x_dpROYB2aKdVxTZW9jnJmLJc6uySP1dlcgHj8'),(229,'yellowoo12@naver.com','1997-05-22 00:00:00','puppy','1234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/yellowoo12@naver.com/profile/71e2b028-8cd2-43b1-bdbb-3926bcc1e031.jpg','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI3MTI5MzZ9.lKZt7ZOR5WR7u83a0WMe3bxevQ42Ae4QVt0n1UPcy2I'),(230,'sw133v@gmail.com','1994-11-11 00:00:00','정성우ss',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/sw133v@gmail.com/profile/b2b33d12-a1ef-4955-99fe-2e516d63835d.png','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI3OTYxMDZ9.6dJcMyFLttWfngtxEz1HKtOBtNSZJ9kolV7lQ9e3O10'),(233,'sasakiryu723@gmail.com','1994-07-23 00:00:00','KAY','1234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/sasakiryu723@gmail.com/profile/606bd04a-4f60-47b6-bc7c-16bbbd3be9dc.jpg','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4NDM2MTF9.LfPvInjFw1HwrASJFEpr7aESnWzR522zSU_CiYb8fLY'),(234,'lkr0943@gmail.com','1994-07-23 00:00:00','K',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/lkr0943@gmail.com/profile/7ee9016b-883c-478c-943c-1bc689f212c6.jpg','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4MTM0MDR9.TU9APaMxZNOBJ_G9LkWS9qMY3nv6s___Ef68LO6ERDs'),(241,'shd2741@naver.com','1997-05-25 00:00:00','고라파덕','1234','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/shd2741@naver.com/profile/80cee555-95f4-447c-b0f3-8ab61fbde8d1.jpg','ieng','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI3MzIzMzN9.0Ap1xZyJuFBkJtIBuoSO9j079uY7Z_9XFFDe__1yLBs'),(242,'sw123v@gmail.com','1994-11-01 00:00:00','zxczxc',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/sw123v@gmail.com/profile/20dfd285-da63-4942-a2d4-d79e36aac693.png','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI3MzI5NzZ9.dQcdEd_7LU0m3I7e4QFt3-4A-opF8FqReow0D2j8-sQ'),(243,'royhmpark@gmail.com','1995-10-16 00:00:00','xptmxj',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/royhmpark@gmail.com/profile/a6f73923-abde-4564-bf69-40a5a74ea1f5.jpeg','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4MTUyOTl9.jPcW7O9JVT7x5xSTrPvCaKhlpQo5DYWG_NnLpg7lO6w'),(244,'sunzero3233@gmail.com','1989-08-31 00:00:00','신짱구',NULL,'https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/user/sunzero3233@gmail.com/profile/98ed259f-fae9-4181-84d7-6d956ada04d2.jpg','google','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYW5zIiwic3ViIjoiSUVuZyBSZWZyZXNoVG9rZW4iLCJleHAiOjE2NzI4NTA2Nzd9.bbtmy4hTQQMQWazORZ3JOkOiiw2ik17FHt5a9fY41lw');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sentences`
--

DROP TABLE IF EXISTS `sentences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sentences` (
  `sentence_seq` bigint NOT NULL AUTO_INCREMENT,
  `sentence` varchar(255) NOT NULL,
  `sentence_mean` varchar(255) NOT NULL,
  `sentence_picture_path` varchar(255) NOT NULL,
  PRIMARY KEY (`sentence_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sentences`
--

LOCK TABLES `sentences` WRITE;
/*!40000 ALTER TABLE `sentences` DISABLE KEYS */;
INSERT INTO `sentences` VALUES (13,'chef is cooking','요리사가 요리를 합니다.','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/cook.png'),(14,'drinking a water','물을 마십니다.','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/drinkwater.png'),(15,'playing a computer','컴퓨터를 합니다.','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/playcomputer.png'),(16,'playing soccer','축구를 합니다.','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/playsoccer.png'),(17,'reading a book','책을 읽습니다.','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/readbook.jpg'),(18,'riding a bicycle','자전거를 탑니다.','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/ridebike.png'),(19,'taking a picture','사진을 찍습니다.','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/takepicture.jpg'),(20,'taking a taxi','택시를 탑니다','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/taketaxi.png'),(21,'dog is washing','개가 씻습니다.','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/wash.png'),(22,'dog is washing','개가 씻습니다.','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/sentences/wash.png');
/*!40000 ALTER TABLE `sentences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sentences_histories`
--

DROP TABLE IF EXISTS `sentences_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sentences_histories` (
  `sentence_history_seq` bigint NOT NULL AUTO_INCREMENT,
  `sentence_history_dttm` varchar(255) DEFAULT NULL,
  `sentennce_history_pass` bit(1) DEFAULT NULL,
  `member_seq` bigint DEFAULT NULL,
  `sentence_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`sentence_history_seq`),
  KEY `FKmrfvke2j9rl39ki5wg5y8oan1` (`member_seq`),
  KEY `FKgk70k4qgkov5b5xfu5ffti5rw` (`sentence_seq`),
  CONSTRAINT `FKgk70k4qgkov5b5xfu5ffti5rw` FOREIGN KEY (`sentence_seq`) REFERENCES `sentences` (`sentence_seq`),
  CONSTRAINT `FKmrfvke2j9rl39ki5wg5y8oan1` FOREIGN KEY (`member_seq`) REFERENCES `members` (`member_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sentences_histories`
--

LOCK TABLES `sentences_histories` WRITE;
/*!40000 ALTER TABLE `sentences_histories` DISABLE KEYS */;
INSERT INTO `sentences_histories` VALUES (61,'2022-10-05',_binary '\0',43,19),(62,'2022-10-05',_binary '\0',43,18),(63,'2022-10-05',_binary '\0',43,17),(64,'2022-10-05',_binary '\0',221,20),(65,'2022-10-05',_binary '\0',221,18),(66,'2022-10-05',_binary '\0',221,14),(67,'2022-10-05',_binary '\0',233,19),(68,'2022-10-05',_binary '\0',233,15),(69,'2022-10-05',_binary '\0',233,13),(70,'2022-10-05',_binary '\0',233,15),(71,'2022-10-05',_binary '\0',233,16),(72,'2022-10-05',_binary '\0',233,19),(73,'2022-10-05',_binary '\0',230,14),(74,'2022-10-05',_binary '\0',230,21),(75,'2022-10-05',_binary '\0',230,20),(76,'2022-10-05',_binary '\0',43,20),(77,'2022-10-05',_binary '\0',43,17),(78,'2022-10-05',_binary '\0',43,14),(79,'2022-10-05',_binary '',220,20),(80,'2022-10-05',_binary '',220,19),(81,'2022-10-05',_binary '',220,18),(82,'2022-10-06',_binary '\0',220,13),(83,'2022-10-06',_binary '',220,15),(84,'2022-10-06',_binary '',220,17),(85,'2022-10-06',_binary '\0',221,21),(86,'2022-10-06',_binary '\0',221,19),(87,'2022-10-06',_binary '\0',221,17),(88,'2022-10-06',_binary '',43,19),(89,'2022-10-06',_binary '',43,21),(90,'2022-10-06',_binary '\0',43,20),(91,'2022-10-06',_binary '',154,16),(92,'2022-10-06',_binary '\0',154,20),(93,'2022-10-06',_binary '',154,18),(94,'2022-10-07',_binary '',244,19),(95,'2022-10-07',_binary '\0',244,14),(96,'2022-10-07',_binary '\0',244,13);
/*!40000 ALTER TABLE `sentences_histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `words`
--

DROP TABLE IF EXISTS `words`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `words` (
  `word_seq` bigint NOT NULL AUTO_INCREMENT,
  `word` varchar(255) NOT NULL,
  `word_mean` varchar(255) NOT NULL,
  `word_picture_path` varchar(255) NOT NULL,
  PRIMARY KEY (`word_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `words`
--

LOCK TABLES `words` WRITE;
/*!40000 ALTER TABLE `words` DISABLE KEYS */;
INSERT INTO `words` VALUES (1,'apple','사과','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/apple.png'),(13,'banana','바나나','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/banana.png'),(14,'tomato','토마토','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/tomato.png'),(15,'car','자동차','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/car.png'),(16,'tree','나무','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/tree.png'),(17,'pencil','연필','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/pencil.png'),(18,'train','기차','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/train.png'),(19,'house','집','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/house.jpg'),(21,'airplane','비행기','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/airplane.png'),(23,'dog','강아지','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/dog.jpg'),(25,'penguin','펭귄','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/penguin.png'),(26,'penguin','펭귄','https://ieng-bucket.s3.ap-northeast-2.amazonaws.com/words/penguin.png');
/*!40000 ALTER TABLE `words` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `words_histories`
--

DROP TABLE IF EXISTS `words_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `words_histories` (
  `word_history_seq` bigint NOT NULL AUTO_INCREMENT,
  `word_history_dttm` varchar(255) DEFAULT NULL,
  `word_history_pass` bit(1) DEFAULT NULL,
  `member_seq` bigint DEFAULT NULL,
  `word_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`word_history_seq`),
  KEY `FKrx6ch9ai6el89pgn2jx3mteb7` (`member_seq`),
  KEY `FKfh8y6quuuqyxn0jq9rx74q26x` (`word_seq`),
  CONSTRAINT `FKfh8y6quuuqyxn0jq9rx74q26x` FOREIGN KEY (`word_seq`) REFERENCES `words` (`word_seq`),
  CONSTRAINT `FKrx6ch9ai6el89pgn2jx3mteb7` FOREIGN KEY (`member_seq`) REFERENCES `members` (`member_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `words_histories`
--

LOCK TABLES `words_histories` WRITE;
/*!40000 ALTER TABLE `words_histories` DISABLE KEYS */;
INSERT INTO `words_histories` VALUES (43,'2022-10-05',_binary '',43,17),(44,'2022-10-05',_binary '',43,18),(45,'2022-10-05',_binary '',43,19),(46,'2022-10-05',_binary '\0',43,21),(47,'2022-10-05',_binary '\0',43,14),(48,'2022-10-05',_binary '\0',43,15),(49,'2022-10-05',_binary '\0',230,25),(50,'2022-10-05',_binary '\0',230,21),(51,'2022-10-05',_binary '\0',230,23),(52,'2022-10-05',_binary '',194,14),(53,'2022-10-05',_binary '',194,17),(54,'2022-10-05',_binary '',194,21),(55,'2022-10-05',_binary '',233,23),(56,'2022-10-05',_binary '',233,16),(57,'2022-10-05',_binary '',233,19),(58,'2022-10-05',_binary '\0',227,14),(59,'2022-10-05',_binary '\0',227,1),(60,'2022-10-05',_binary '\0',227,13),(61,'2022-10-05',_binary '\0',43,1),(62,'2022-10-05',_binary '',43,25),(63,'2022-10-05',_binary '',43,21),(68,'2022-10-05',_binary '',220,13),(69,'2022-10-05',_binary '',220,16),(70,'2022-10-06',_binary '\0',221,1),(72,'2022-10-06',_binary '',221,25),(73,'2022-10-06',_binary '\0',43,23),(75,'2022-10-06',_binary '',43,14),(76,'2022-10-06',_binary '\0',233,18),(78,'2022-10-06',_binary '\0',233,14),(80,'2022-10-06',_binary '\0',243,19),(81,'2022-10-06',_binary '\0',243,18),(82,'2022-10-06',_binary '\0',194,23),(83,'2022-10-06',_binary '\0',194,19),(84,'2022-10-06',_binary '\0',194,1),(85,'2022-10-06',_binary '\0',221,21),(86,'2022-10-06',_binary '\0',221,13),(87,'2022-10-06',_binary '\0',221,23),(88,'2022-10-06',_binary '\0',154,17),(89,'2022-10-06',_binary '',154,25),(90,'2022-10-06',_binary '',154,16),(91,'2022-10-06',_binary '',194,18),(92,'2022-10-06',_binary '',194,25),(93,'2022-10-06',_binary '',194,13),(94,'2022-10-07',_binary '\0',220,15),(95,'2022-10-07',_binary '\0',220,1),(96,'2022-10-07',_binary '\0',220,18),(99,'2022-10-07',_binary '\0',220,15),(100,'2022-10-07',_binary '',220,19),(101,'2022-10-07',_binary '',220,23),(102,'2022-10-07',_binary '\0',220,17),(103,'2022-10-07',_binary '',244,16),(104,'2022-10-07',_binary '',244,21),(105,'2022-10-07',_binary '',244,19),(106,'2022-10-07',_binary '\0',244,25),(107,'2022-10-07',_binary '',244,23),(108,'2022-10-07',_binary '',244,14);
/*!40000 ALTER TABLE `words_histories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07  2:30:53
