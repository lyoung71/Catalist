from pydantic import BaseModel


class AccountIn(BaseModel):
    first_name: str
    last_name: str
    username: str
    password: str


class AccountOut(BaseModel):
    id: str
    first_name: str
    last_name: str
    username: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str
