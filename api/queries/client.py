import os
from pymongo import MongoClient


MONGO_URL = os.environ["MONGO_URL"]
client = MongoClient(MONGO_URL)


class Queries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]


import os
import pymongo


MONGO_URL = os.environ["MONGO_URL"]
client = pymongo.MongoClient(MONGO_URL)


class Queries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]
