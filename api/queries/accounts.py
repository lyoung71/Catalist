from .client import Queries
from models.errors import DuplicateAccountError
from pymongo.errors import DuplicateKeyError
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
    password: str


class AccountQueries(Queries):
    DB_NAME = "accountsDatabase"
    COLLECTION = "accounts"

    def get(self, username: str) -> AccountOutWithPassword:
        props = self.collection.find_one({"username": username})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return AccountOutWithPassword(**props)

    def create(
        self,
        info: AccountIn,
            hashed_password: str) -> AccountOutWithPassword:

        props = info.dict()
        props["password"] = hashed_password
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        print(props)
        return AccountOutWithPassword(**props)
