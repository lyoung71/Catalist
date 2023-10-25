from fastapi.testclient import TestClient
from main import app

# from api.queries.journals import JournalQueries

client = TestClient(app)


def test_fake():
    # Arrange

    # Act

    # Assert
    assert 1 == 1

    # def test_get_all_items():
    #     app.dependency_overrides[JournalQueries] = MockJournalQueries
