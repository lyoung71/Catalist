from pydantic import BaseModel
from main import app
from authenticator import authenticator
from queries.journals import JournalQueries
from fastapi.testclient import TestClient

client = TestClient(app)


class AccountOut(BaseModel):
    id: str
    first_name: str
    last_name: str
    username: str


class JournalWithID(BaseModel):
    mood: str
    desc: str
    journal_date: str
    id: str


def fake_get_current_account_data():
    return AccountOut(
        id="1",
        first_name="Notorious",
        last_name="BIG",
        username="Big Poppa"
    )


# def test_get_token():
#     app.dependency_overrides[authenticator.get_current_account_data]
#  = fake_get_current_account_data
#     response = client.get("/token")
#     app.dependency_overrides = {}
#     assert response.status_code == 200
#     assert response.json() == AccountOut

# def fake_get_current_journal_data():
#     return JournalWithID(
#         mood="frustrated",
#         desc="unit testing sucks",
#         journal_date="10/24/2023",
#         id="6536c9fdd609f361065f6e8b"
#     )

class fake_journal_queries:
    def get_journal_by_id():
        return {
            "mood": "frustrated",
            "desc": "unit testing sucks",
            "journal_date": "10/24/2023",
            "id": "6536c9fdd609f361065f6e8b"
        }


def test_get_journal():
    app.dependency_overrides[authenticator.get_current_account_data] = \
        fake_get_current_account_data
    app.dependency_overrides[JournalQueries] = fake_journal_queries
    response = client.get("/api/journals/6536c9fdd609f361065f6e8b")
    app.dependency_overrides = {}
    expected = {
        "mood": "frustrated",
        "desc": "unit testing sucks",
        "journal_date": "10/24/2023",
        "id": "6536c9fdd609f361065f6e8b"
    }
    assert response.status_code == 200
    assert response.json() == expected
