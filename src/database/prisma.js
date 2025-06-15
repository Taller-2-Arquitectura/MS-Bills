const { PrismaClient: MariaClient } = require('../../prisma/src/generated/prisma');
const { PrismaClient: MariaBillClient } = require('../../prisma/generated/mariadb');

const mariadb = new MariaClient();
const mariadbBill = new MariaBillClient();

module.exports = {
  mariadbBill,
  mariadb
};