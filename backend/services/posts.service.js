const db = require("../models/index.js");

class Posts {
  constructor() {}

  static async insertOrUpdate(data) {
    return await db.Posts.upsert(data, {
      returning: true,
    });
  }
  static async getAll(whereClause = {}) {
    return await db.Posts.findAll(whereClause);
  }
  static async getOne(whereClause) {
    return await db.Posts.findOne(whereClause);

  }
  static async update(updateClause, whereClause) {
    return await db.Posts.update(updateClause, whereClause);
  }
}

module.exports = Posts;