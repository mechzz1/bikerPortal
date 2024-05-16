const db = require("../models/index.js");

class Chats {
  constructor() {}

  static async insertOrUpdate(data) {
    return await db.Chats.upsert(data, {
      returning: true,
    });
  }
  static async getAll(whereClause = {}) {
    return await db.Chats.findAll(whereClause);
  }
  static async getOne(whereClause) {
    return await db.Chats.findOne(whereClause);

  }
  static async update(updateClause, whereClause) {
    return await db.Chats.update(updateClause, whereClause);
  }
}

module.exports = Chats;