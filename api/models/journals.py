from pydantic import BaseModel


class Journal(BaseModel):
    mood: str
    desc: str
    journal_date: str = None
    # pokemon: [] = None


class JournalWithId(Journal):
    id: str
