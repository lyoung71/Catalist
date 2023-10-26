from pydantic import BaseModel


class Todo(BaseModel):
    name: str
    description: str
    is_completed: bool = False
    # created: datetime = Field(default_factory=datetime.utcnow)
    created: str


class TodoWithId(Todo):
    id: str
