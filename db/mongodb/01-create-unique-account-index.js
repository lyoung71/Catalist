conn = Mongo();
db = conn.getDB('todo');

db.tasks.insertOne({
  _id: ObjectId('633184f42ec069ab607b0b5b'),
  name: 'Mongo Demo',
  desc: 'Create a demo for Mongo and FastAPI',
  is_done: false,
  subtasks: [
    {
      name: "create api",
      is_done: false,
    },
    {
      name: "create db",
      is_done: false,
    },
    {
      name: "connect db to api",
      is_done: false,
    }
  ]
});
db.accounts.createIndex(
  {name: 1},
  {unique: true}
);
