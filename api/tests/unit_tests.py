from fastapi.testclient import TestClient
from main import app
from queries.journals import JournalQueries

client = TestClient(app)

def test_example():
    #SEAT
    # Setup
    num1 = 1
    num2 = 1
    expected = 2
    # Enact
    actual = num1 + num2
    # Assert
    assert actual == expected
    # Teardown
    num1 = None
    num2 = None
