from fastapi import APIRouter, Depends
from queries.journals import JournalQueries
from models.journals import Journal, JournalWithId
from models.errors import Error


router = APIRouter()


@router.get("/", response_model=list[JournalWithId] | Error)
def get_journals(queries: JournalQueries = Depends()):
    return queries.get_journals()


@router.get("/{id}", response_model=JournalWithId | Error)
def get_journal_by_id(id: str, queries: JournalQueries = Depends()):
    return queries.get_journal_by_id(id)


@router.post("/", response_model=JournalWithId | Error)
def create_journal(journal: Journal, queries: JournalQueries = Depends()):
    return queries.create_journal(journal)


@router.put("/{id}", response_model=JournalWithId | Error)
def update_journal(
    id: str, journal: JournalWithId, queries: JournalQueries = Depends()
):
    return queries.update_journal(id, journal)


@router.delete("/{id}", response_model=bool | Error)
def delete_journal(id: str, queries: JournalQueries = Depends()):
    return queries.delete_journal(id)
