from pydantic import BaseModel, Field
from datetime import datetime


class Todo(BaseModel):
    name: str
    description: str
    is_completed: bool = False
    created: datetime = Field(default_factory=datetime.utcnow)

class TodoWithId(Todo):
    id: str
