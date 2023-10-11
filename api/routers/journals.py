from fastapi import APIRouter, Depends
from models.journals import Journal, JournalWithId
from queries.journals import JournalQueries


router = APIRouter()


@router.get("/journals")
def get_journals(queries: JournalQueries = Depends):
    return queries.get_journals


@router.get("journals/{id}")
def get_journal_detail(queries: JournalWithId = Depends):
    print("owo")
    return queries
