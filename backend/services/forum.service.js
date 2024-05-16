const db = require("../models/index.js");

class Forum {
  constructor() {}

  static async insertOrUpdate(data) {
    return await db.Forum.upsert(data, {
      returning: true,
    });
  }
  static async getAll(whereClause = {}) {
    return await db.Forum.findAll(whereClause);
  }
  static async getOne(whereClause) {
    return await db.Forum.findOne(whereClause);

  }
  static async update(updateClause, whereClause) {
    return await db.Forum.update(updateClause, whereClause);
  }
}

module.exports = Forum;