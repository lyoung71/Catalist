from pydantic import BaseModel
from datetime import date


class Journal(BaseModel):
    mood: str
    desc: str
    journal_date: str


class JournalWithId(Journal):
    id: str
