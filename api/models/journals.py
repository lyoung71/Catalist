from pydantic import BaseModel
from datetime import date


class Journal(BaseModel):
    mood: str
    desc: str
    journal_date: date


class JournalWithId(Journal):
    id: str
