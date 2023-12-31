import os
from pymongo import MongoClient


MONGO_URL = os.environ.get("MONGO_URL")
client = MongoClient(MONGO_URL)


class Queries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]
