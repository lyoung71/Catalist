from pydantic import BaseModel


class Journal(BaseModel):
    mood: str
    desc: str
    created: str


class JournalWithId(Journal):
    id: str
