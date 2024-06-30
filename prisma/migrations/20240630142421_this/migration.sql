-- CreateTable
CREATE TABLE `wouldyourather` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fieldA` VARCHAR(191) NOT NULL,
    `fieldB` VARCHAR(191) NOT NULL,
    `percentA` INTEGER NOT NULL,
    `percentB` INTEGER NOT NULL,
    `votesA` INTEGER NOT NULL,
    `votesB` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
