from fastapi.testclient import TestClient
from main import app
from queries.journals import JournalQueries
from queries.accounts import AccountQueries
from authenticator import authenticator
from pydantic import BaseModel
from models.journals import Journal, JournalWithId
from test_py import AccountQuery, AccountQueries


client = TestClient(app)

# def fake_get_journal_data():
#     return JournalWithId(
#         mood="sad",
#         desc="madge",
#         journal_date="10/24/23",
#         id="6536d0b41778f7317f33d50c",)


class AccountQuery:
    def get(self, username: str):
        return {
            "id": "61318bf5e4dfcd730b2e213f",
            "first_name": "Emre",
            "last_name": "Akilli",
            "username": "emreakilli",
        }


class MockJournalQueriesId:
    def get_journal_by_id(self, id: str):
        return {
            "mood": "sad",
            "desc": "madge",
            "journal_date": "10/24/23",
            "id": "6536d0b41778f7317f33d50c",
        }
        # return JournalWithId(
        #     mood="sad",
        #     desc="madge",
        #     journal_date="10/24/23",
        #     id="6536d0b41778f7317f33d50c",
        #     # account_data={}
        #     )


class MockJournalQueries:
    def get_journals(self, account):
        return [
            {
                "mood": "string",
                "desc": "string",
                "journal_date": "string",
                "id": "6536d0b41778f7317f33d50c",
            },
            {
                "mood": "string",
                "desc": "string",
                "journal_date": "string",
                "id": "6536d0b81778f7317f33d50d",
            },
            {
                "mood": "string",
                "desc": "string",
                "journal_date": "string",
                "id": "65392043508ab544db271123",
            },
            {
                "mood": "string",
                "desc": "string",
                "journal_date": "string",
                "id": "65392045508ab544db271124",
            },
        ]


# class MockDeleteJournal:
#     def delete_journal(self, journal_id):
#         self.collection.delete_one({"_id": ObjectId(journal_id)})
#         return {"message": "Successfully deleted journal."}


# class AccountOut(BaseModel):
#     id: str
#     first_name: str
#     last_name: str
#     username: str


def fake_get_current_account_data():
    return {
        "id": "1",
        "first_name": "Notorious",
        "last_name": "BIG",
        "username": "Big Poppa",
    }


def test_get_journal_by_id():
    # Setup/arrange
    # app.dependency_overrides[authenticator.get_current_account_data] = fake_get_journal_data
    app.dependency_overrides[JournalQueries] = MockJournalQueriesId
    # Enact/Act
    response = client.get("/api/journals/{id}")
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    # assert response.json() == []


def test_get_all_journals():
    # Setup/arrange
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    app.dependency_overrides[JournalQueries] = MockJournalQueries
    # Enact/Act
    response = client.get("/api/journals/")

    # Assert
    assert response.status_code == 200
    assert response.json() == [
        {
            "mood": "string",
            "desc": "string",
            "journal_date": "string",
            "id": "6536d0b41778f7317f33d50c",
        },
        {
            "mood": "string",
            "desc": "string",
            "journal_date": "string",
            "id": "6536d0b81778f7317f33d50d",
        },
        {
            "mood": "string",
            "desc": "string",
            "journal_date": "string",
            "id": "65392043508ab544db271123",
        },
        {
            "mood": "string",
            "desc": "string",
            "journal_date": "string",
            "id": "65392045508ab544db271124",
        },
    ]

    app.dependency_overrides = {}


# def test_authorization():
#     # Setup/arrange
#     # app.dependency_overrides[authenticator.get_current_account_data] = MockJournalQueries.get_journals
#     app.dependency_overrides[JournalQueries] = MockJournalQueries
#     # Enact/Act
#     response = client.get("/api/journals/")
#     app.dependency_overrides = {}
#     # Assert
#     assert response.status_code == 401
#     # assert response.json() == []


# def test_create_journal():
#     app.dependency_overrides[
#         authenticator.get_current_account_data
#     ] = MockJournalQueries.get_journals
#     app.dependency_overrides[JournalQueries] = MockJournalQueriesId
#     pass

#     # def create_journal(self, journal, account_data):
#     #     result = journal.dict()
#     #     result["account_id"] = account_data
#     #     print(result)
#     #     self.collection.insert_one(result)
#     #     return {"message": "successfully created journal"}


# def test_delete_journal():
#     # Setup/arrange
#     # app.dependency_overrides[authenticator.get_current_account_data] = fake_get_journal_data
#     app.dependency_overrides[JournalQueries] = MockJournalQueriesId
#     # Enact/Act
#     response = client.get("/api/journals/{id}")
#     app.dependency_overrides = {}
#     # Assert
#     assert response.status_code == 200
#     # assert response.json() == []
