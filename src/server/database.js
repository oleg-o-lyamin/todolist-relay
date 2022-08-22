var Database = function () {
  this.database = [];

  this.addTodo = function (todo) {
    const id = "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .reduce(
        (prev, current) => (Math.random() > 0.5 ? prev + current : prev),
        ""
      );
    const entry = { id, ...todo, completed: false };
    this.database.push(entry);
    return entry;
  };

  this.findAll = function () {
    return [...this.database];
  };

  this.findById = function (id) {
    return this.database.find((todo) => todo.id === id);
  };

  this.editById = function (id, todo) {
    const index = this.database.findIndex((todo) => todo.id === id);
    if (index === -1) return null;

    const databaseEntry = this.database[index];
    this.database[index] = { ...databaseEntry, ...todo };
    return this.database[index];
  };

  this.deleteById = function (id) {
    const index = this.database.findIndex((todo) => todo.id === id);
    if (index === -1) return false;

    this.database.splice(index, 1);
    return true;
  };
};

module.exports = Database;
