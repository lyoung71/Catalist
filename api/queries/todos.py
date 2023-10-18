from bson.objectid import ObjectId
import random
from .client import Queries

class TodosQueries(Queries):
    DB_NAME = "tasks"
    COLLECTION = "todos"

    def get_todos(self):
        try:
            result = list(self.collection.find())
            if len(result) > 0:
                for todo in result:
                    todo["id"] = str(todo["_id"])
                return result
            return {"message": "Please create a to-do item!"}
        except Exception as e:
            raise Exception(e)


    def get_todo_by_id(self, todo_id):
        try:
            result = self.collection.find_one({"_id": ObjectId(todo_id)})
            result["id"] = todo_id
            if result is not None:
                return result
            return {"message": "There's no to-do with that id"}
        except Exception as e:
            raise Exception(e)


    def create_todo(self, todo):
        try:
            return self.collection.insert_one(todo.dict())
        except Exception as e:
            raise Exception(e)

    def update_todo(self, todo_id, updated_todo):
        try:
            self.collection.update_one(
                {"_id": ObjectId(todo_id)},
                {"$set": {**updated_todo.dict()}}
            )
            return {"message": "Successfully updated to-do item.", "success": True}
        except Exception as e:
            raise Exception(e)


    def delete_todo(self, todo_id):
        try:
            result = self.collection.delete_one({"_id": ObjectId(todo_id)})
            if result is not None:
                return {"message": "Successfully deleted to-do item", "success": True}
            return {"message": "There's no to-do item with this id."}
        except Exception as e:
            raise Exception(e)
