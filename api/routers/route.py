from fastapi import APIRouter
from models.journals import Journal
from config.database import collection_name
from schemas.journal_schemas import list_serial
from bson import ObjectId

router = APIRouter()


# GET Request method
@router.get("/")
async def get_journals():
    journals = list_serial(collection_name.find())
    return journals


# POST
@router.post("/")
async def post_journal(journal: Journal):
    collection_name.insert_one(dict(journal))


# PUT
@router.put("/{id}")
async def put_journal(id: str, journal: Journal):
    collection_name.find_one_and_update(
        {"_id": ObjectId(id)}, {"$set": dict(journal)}
    )


# DELETE
@router.delete("/{id}")
async def delete_journal(id: str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})
