from .client import Queries
from bson.objectid import ObjectId




class AccountQueries(Queries):
    DB_NAME = "accountsDatabase"
    COLLECTION = "accounts"

    def get_accounts(self):
        try:
            result = list(self.collection.find())
            if len(result) > 0:
                for account in result:
                    account["id"] = str(account["_id"])
                return result
            return {"message": "Please create an account"}
        except Exception as e:
            raise Exception(e)

    def get_account_by_id(self, account_id):
        try:
            result = self.collection.find_one({"_id": ObjectId(account_id)})
            result["id"] = str(result["_id"])
            if result is not None:
                return result
            return {"message": "There's no account with that id"}
        except Exception as e:
            raise Exception(e)

    def create_account(self, account):
        try:
            self.collection.insert_one(account.dict())
            return {"message": "Account created successfully."}
        except Exception as e:
            raise Exception(e)

    def update_account(self, account_id, updated_account):
        try:
            self.collection.update_one(
                {"_id": ObjectId(account_id)},
                {"$set": {**updated_account.dict()}}
            )
            return {"message": "Sucessfully updated account."}
        except Exception as e:
            raise Exception(e)

    def delete_account(self, account_id):
        try:
            result = self.collection.delete_one({"_id": ObjectId(account_id)})
            if result is not None:
                return {"message": "Successfully deleted account"}
            return {"message": "There's no account with this id."}
        except Exception as e:
            raise Exception(e)
