from pydantic import BaseModel


class Account(BaseModel):
    first_name: str
    last_name: str
    email: str


class AccountWithId(Account):
    id: str


class AccountWithPassword(AccountWithId):
    hashed_password: str
