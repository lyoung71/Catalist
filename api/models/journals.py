from pydantic import BaseModel, Field
from datetime import date


class Journal(BaseModel):
    mood: str
    desc: str
    created: date = Field(default_factory=date.today)


class JournalWithId(Journal):
    id: str
