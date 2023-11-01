from fastapi.testclient import TestClient
from main import app
from queries.journals import JournalQueries
from queries.accounts import AccountQueries
from authenticator import authenticator
from models.journals import Journal, JournalWithId


client = TestClient(app)


class AccountQuery:
    def get(self, username):
        return {
            "id": "61318bf5e4dfcd730b2e213f",
            "first_name": "Emre",
            "last_name": "Akilli",
            "username": "emreakilli",
        }


def test_get_by_username():
    app.dependency_overrides[AccountQueries] = AccountQuery
    # expected = {
    #     "id": "61318bf5e4dfcd730b2e213f",
    #     "first_name": "Emre",
    #     "last_name": "Akilli",
    #     "username": "emreakilli",
    # }
    response = client.get("/api/accounts/emreakilli")
    app.dependency_overrides = {}
    assert response.status_code == 200
    # assert response.json() == expected


class MockJournalQueriesId:
    def get_journal_by_id(self, journal_id: str, accountid: str):
        return {
            "mood": "sad",
            "desc": "madge",
            "journal_date": "10/24/23",
            "id": "6536d0b41778f7317f33d50c",
        }


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

    def create_journal(self, params: Journal, account):
        return {
            "mood": "string",
            "desc": "string",
            "journal_date": "string",
            "id": "65392045508ab544db271124",
        }

    def update_journal(self, id, journal: JournalWithId):
        return {
            "mood": "a",
            "desc": "a",
            "journal_date": "a",
            "id": "65392045508ab544db271124",
        }


def fake_get_current_account_data():
    return {
        "id": "1",
        "first_name": "Notorious",
        "last_name": "BIG",
        "username": "Big Poppa",
    }


def test_get_journal_by_id():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    app.dependency_overrides[JournalQueries] = MockJournalQueriesId
    response = client.get("/api/journals/1")
    app.dependency_overrides = {}
    assert response.status_code == 200


def test_get_all_journals():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    app.dependency_overrides[JournalQueries] = MockJournalQueries
    response = client.get("/api/journals/")

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


def test_create_journal():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    app.dependency_overrides[JournalQueries] = MockJournalQueries
    entry = {
        "mood": "string",
        "desc": "string",
        "journal_date": "string",
    }
    response = client.post("/api/journals", json=entry)
    data = response.json()
    assert response.status_code == 200
    assert data["id"] == "65392045508ab544db271124"

    app.dependency_overrides = {}


def test_update_journal():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    app.dependency_overrides[JournalQueries] = MockJournalQueries
    entry = {
        "mood": "a",
        "desc": "a",
        "journal_date": "a",
        "id": "65392045508ab544db271124",
    }
    response = client.put("/api/journals/65392045508ab544db271124", json=entry)
    data = response.json()
    assert response.status_code == 200
    assert data["mood"] == "a"

    app.dependency_overrides = {}
