from pydantic import BaseModel


class Journal(BaseModel):
    desc: str


class JournalWithId(Journal):
    id: int
