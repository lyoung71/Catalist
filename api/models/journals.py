from pydantic import BaseModel


class Journal(BaseModel):
    mood: str
    desc: str
    journal_date: str


class JournalWithId(Journal):
    id: str
