/*
CREATE TABLE `hssp`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `phone` VARCHAR(16) NOT NULL,
  `password` VARCHAR(65) NOT NULL,
  `name` VARCHAR(15) NOT NULL,
  `birth_date` INT NOT NULL,
  `join_date` INT NOT NULL,
  `is_active` TINYINT NOT NULL DEFAULT 1,
  `is_admin` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE);
* */


/**
 * 메뉴 항목을 추가한다.
 * @param {Context} id 항목에 대한 고유 식별자
 * @param {Object} url 항목 아이콘
 * @returns {boolean} 성공 여부
 */
export async function createUser(ctx, args){
    ctx.db.connect();
    const queryResult = await ctx.db.promise().query(
        "INSERT INTO `hssp`.`user` (`phone`, `password`, `name`, `birth_date`, `join_date`, `is_active`, `is_admin`)" +
        "VALUES (?, ?, ?, ?, ?, ?, ?);",
        [
            args.phone,
            args.password,
            args.name,
            args.birthDate,
            args.joinDate,
            args.isActive,
            args.isAdmin,
        ]);
    console.log(queryResult);
}