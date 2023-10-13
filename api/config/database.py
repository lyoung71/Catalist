from pymongo import MongoClient

client = MongoClient(
    "mongodb+srv://mpastoral:vO2hDIPNepBdZwyp@cluster0.tfq5sxk.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
)

db = client.journal_db

collection_name = db["journal_collection"]
