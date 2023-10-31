from pydantic import BaseModel


class Todo(BaseModel):
    name: str
    description: str
    is_completed: bool = False
    created: str


class TodoWithId(Todo):
    id: str
