from fastapi import APIRouter, Depends, status, Response
from models.accounts import Account, AccountWithPassword
from models.errors import Error
from queries.accounts import AccountQueries


router = APIRouter()


@router.get('/', response_model=list[AccountWithPassword] | Error)
def get_accounts(queries: AccountQueries = Depends()):
    return queries.get_accounts()


@router.get('/{id}', response_model=AccountWithPassword | Error)
def get_account_by_id(id: str, queries: AccountQueries = Depends()):
    return queries.get_account_by_id(id)


@router.post("/", response_model=AccountWithPassword | Error)
def create_account(account: Account, queries: AccountQueries = Depends()):
    return queries.create_account(account)


@router.put("/{id}", response_model=AccountWithPassword | Error)
def update_account(id: str, account: AccountWithPassword, queries: AccountQueries = Depends()):
    return queries.update_account(id, account)


@router.delete("/{id}", response_model=bool | Error)
def delete_account(id: str, queries: AccountQueries = Depends()):
    return queries.delete_account(id)
