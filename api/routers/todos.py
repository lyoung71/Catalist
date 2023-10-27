from fastapi import APIRouter, Depends, status, Response
from queries.todos import TodosQueries
from models.todos import Todo, TodoWithId
from models.errors import Error
from authenticator import authenticator

router = APIRouter()


@router.get("/", status_code=200, response_model=list[TodoWithId] | Error)
def get_todos(
    response: Response,
    queries: TodosQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    try:
        result = queries.get_todos(account_data["id"])
        return result
    except Exception as e:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return {"message": str(e)}


@router.get("/{id}", status_code=200, response_model=TodoWithId | Error)
def get_todo_by_id(
    id: str, response: Response, queries: TodosQueries = Depends()
):
    try:
        result = queries.get_todo_by_id(id)
        if isinstance(result, dict):
            response.status_code = status.HTTP_404_NOT_FOUND
        return result
    except Exception as e:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return {"message": str(e)}


@router.post("/", status_code=201, response_model=TodoWithId | Error)
def create_todo(
    todo: Todo,
    response: Response,
    queries: TodosQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    try:
        result = queries.create_todo(todo, account_data["id"])
        if result:
            return {"message": "Successfully created todo", "success": True}
        response.status_code = status.HTTP_400_BAD_REQUEST
        return {"message": "The todo-item was not created"}
    except Exception as e:
        return {"message": str(e)}


@router.put("/{id}", status_code=201, response_model=TodoWithId | Error)
def update_todo(
    id: str,
    response: Response,
    todo: TodoWithId,
    queries: TodosQueries = Depends(),
):
    try:
        result = queries.update_todo(id, todo)
        if not result["success"]:
            return result
    except Exception as e:
        return {"message": str(e)}


@router.delete("/{id}", status_code=201, response_model=bool | Error)
def delete_todo(
    id: str, response: Response, queries: TodosQueries = Depends()
):
    try:
        result = queries.delete_todo(id)
        if result["success"] is False:
            response.status_code = status.HTTP_404_NOT_FOUND
        return result
    except Exception as e:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return {"message": str(e)}
