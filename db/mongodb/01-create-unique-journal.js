conn = Mongo();
db = conn.getDB("journals");

db.journals.insertOne({
  _id: ObjectId("6515af9fcdb8119b2f183154"),
  mood: "angry",
  desc: "ahhhhh",
  journal_date: "9/28/2023",
});
