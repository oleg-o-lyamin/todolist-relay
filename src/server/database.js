var Database = function () {
  this.database = [];

  this.add = function (input) {
    const id = "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .reduce(
        (prev, current) => (Math.random() > 0.5 ? prev + current : prev),
        ""
      );
    const entry = { id, ...input };
    this.database.push(entry);
    return entry;
  };

  this.findAll = function () {
    return [...this.database];
  };

  this.findById = function (id) {
    return this.database.find((entry) => entry.id === id);
  };

  this.editById = function (id, entry) {
    const index = this.database.findIndex((el) => el.id === id);
    if (index === -1) return null;

    const databaseEntry = this.database[index];
    this.database[index] = { ...databaseEntry, ...entry };
    return this.database[index];
  };

  this.deleteById = function (id) {
    const index = this.database.findIndex((el) => el.id === id);
    if (index === -1) return false;

    this.database.splice(index, 1);
    return true;
  };
};

module.exports = Database;
