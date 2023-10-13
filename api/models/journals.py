from pydantic import BaseModel


class Journal(BaseModel):
    name: str
    description: str
    complete: bool
