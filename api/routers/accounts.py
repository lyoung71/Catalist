from fastapi import APIRouter, Depends
from queries.accounts import AccountsQueries
router = APIRouter()

@router.get('/')
def get_accounts():
    return []

@router.post("/")
def create_account(account: dict):
    pass
