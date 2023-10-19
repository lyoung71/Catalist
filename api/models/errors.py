from pydantic import BaseModel


class Error(BaseModel):
    message: str


class DuplicateAccountError(ValueError):
    pass
