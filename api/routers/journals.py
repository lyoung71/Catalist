from fastapi import APIRouter, Depends
from models.journals import Journal, JournalWithId
from queries.journals import JournalQueries


router = APIRouter()


@router.get("/journals")
def get_journals(queries: JournalQueries = Depends):
    return queries.get_journals
from fastapi import APIRouter, Depends
from queries.journals import JournalQueries
from models.journals import Journal, JournalWithId
from models.errors import Error
from authenticator import authenticator


router = APIRouter()


@router.get("/", response_model=list[JournalWithId] | Error)
def get_journals(
    queries: JournalQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return queries.get_journals(account_data["id"])


@router.get("/{id}", response_model=JournalWithId | Error)
def get_journal_by_id(id: str, queries: JournalQueries = Depends()):
    return queries.get_journal_by_id(id)


@router.post("/", response_model=JournalWithId | Error)
def create_journal(
    journal: Journal,
    queries: JournalQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return queries.create_journal(journal, account_data["id"])


@router.put("/{id}", response_model=JournalWithId | Error)
def update_journal(
    id: str, journal: JournalWithId, queries: JournalQueries = Depends()
):
    return queries.update_journal(id, journal)


@router.delete("/{id}", response_model=bool | Error)
def delete_journal(id: str, queries: JournalQueries = Depends()):
    return queries.delete_journal(id)


@router.get("journals/{id}")
def get_journal_detail(queries: JournalWithId = Depends):
    print("owo")
    return queries
