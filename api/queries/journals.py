import random
from .client import Queries


class JournalQueries:
    DB_NAME = "journals"
    COLLECTION = "journal"

    def get_journal(self):
        result = list(self.collection.find())
