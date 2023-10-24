from fastapi.testclient import TestClient
from main import app
from queries.journals import JournalQueries
from authenticator import authenticator
from pydantic import BaseModel
from models.journals import Journal, JournalWithId

client = TestClient(app)

# def fake_get_journal_data():
#     return JournalWithId(
#         mood="sad",
#         desc="madge",
#         journal_date="10/24/23",
#         id="6536d0b41778f7317f33d50c",)


class MockJournalQueriesId:
    def get_journal_by_id(self, id):
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
        return []


class MockDeleteJournal:
    def delete_journal(self, journal_id):
        self.collection.delete_one({"_id": ObjectId(journal_id)})
        return {"message": "Successfully deleted journal."}


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
    ] = MockJournalQueries.get_journals
    app.dependency_overrides[JournalQueries] = MockJournalQueries
    # Enact/Act
    response = client.get("/api/journals/")
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    # assert response.json() == []


def test_authorization():
    # Setup/arrange
    # app.dependency_overrides[authenticator.get_current_account_data] = MockJournalQueries.get_journals
    app.dependency_overrides[JournalQueries] = MockJournalQueries
    # Enact/Act
    response = client.get("/api/journals/")
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 401
    # assert response.json() == []


def test_create_journal():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = MockJournalQueries.get_journals
    app.dependency_overrides[JournalQueries] = MockJournalQueriesId
    pass

    # def create_journal(self, journal, account_data):
    #     result = journal.dict()
    #     result["account_id"] = account_data
    #     print(result)
    #     self.collection.insert_one(result)
    #     return {"message": "successfully created journal"}


def test_delete_journal():
    # Setup/arrange
    # app.dependency_overrides[authenticator.get_current_account_data] = fake_get_journal_data
    app.dependency_overrides[JournalQueries] = MockJournalQueriesId
    # Enact/Act
    response = client.get("/api/journals/{id}")
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    # assert response.json() == []
