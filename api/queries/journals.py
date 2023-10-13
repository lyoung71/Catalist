from .client import Queries
from bson.objectid import ObjectId


class JournalQueries(Queries):
    DB_NAME = "journals"  # maybe I should change the name of the database?
    COLLECTION = "journal"

    def get_journals(self):
        result = list(self.collection.find())
        if len(result) > 0:
            for journal in result:
                journal["id"] = str(journal["_id"])
            return result
        return {"message": "This collection has no journals"}

    def get_journal_by_id(self, journal_id):
        # result = self.collection.find_one({"_id": ObjectId(journal_id)})
        # result["id"] = str(result["_id"])
        # return result

        try:
            result = self.collection.find_one({"_id": ObjectId(journal_id)})
            result["id"] = journal_id
            if result is not None:
                return result
            return {"message": "There is no journal with that id"}
        except Exception as e:
            raise Exception(e)

    def create_journal(self, journal):
        self.collection.insert_one(journal.dict())
        return {"message": "successfully created journal"}

    def update_journal(self, journal_id, updated_journal):
        self.collection.update_one(
            {"_id": ObjectId(journal_id)}, {"$set": {**updated_journal.dict()}}
        )

    def delete_journal(self, journal_id):
        self.collection.delete_one({"_id": ObjectId(journal_id)})
        return {"message": "Successfully deleted journal."}
