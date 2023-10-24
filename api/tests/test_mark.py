from fastapi.testclient import TestClient
from main import app
from queries.journals import JournalQueries
from authenticator import authenticator
from pydantic import BaseModel
from models.journals import Journal, JournalWithId

client = TestClient(app)

def fake_get_journal_data():
    return JournalWithId(
        mood="sad", 
        desc="madge", 
        journal_date="10/24/23",
        id="6536d0b41778f7317f33d50c",
        account_data={})

class MockJournalQueries:
    def get_journal_by_id(self, id):
        return {
            "mood":"sad", 
            "desc":"madge", 
            "journal_date":"10/24/23",
            "id":"6536d0b41778f7317f33d50c",
        }
        # return JournalWithId(
        #     mood="sad", 
        #     desc="madge", 
        #     journal_date="10/24/23",
        #     id="6536d0b41778f7317f33d50c",
        #     # account_data={}
        #     )
    
def test_get_all_items():
    # Setup/arrange
    # app.dependency_overrides[authenticator.get_current_account_data] = fake_get_journal_data
    app.dependency_overrides[JournalQueries] = MockJournalQueries
    # Enact/Act
    response = client.get("/api/journals/{id}")
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    # assert response.json() == []
