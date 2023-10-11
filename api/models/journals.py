from pydantic import BaseModel


class Journal(BaseModel):
    desc: str
    emotion: str


class JournalWithId(Journal):
    id: int
