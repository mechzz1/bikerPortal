const db = require("../models/index.js");

class Events {
  constructor() {}

  static async insertOrUpdate(data) {
    return await db.Events.upsert(data, {
      returning: true,
    });
  }
  static async getAll(whereClause = {}) {
    return await db.Events.findAll(whereClause);
  }
  static async getOne(whereClause) {
    return await db.Events.findOne(whereClause);

  }
  static async update(updateClause, whereClause) {
    return await db.Events.update(updateClause, whereClause);
  }
}

module.exports = Events;