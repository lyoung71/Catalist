from fastapi import APIRouter, Depends
from queries.journals import JournalQueries

router = APIRouter()


@router.get("/")
def get_journals(queries: JournalQueries = Depends):
    return queries.get_journals
