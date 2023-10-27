# from fastapi.testclient import TestClient
# from main import app
# from queries.accounts import AccountQueries


# client = TestClient(app)


# class AccountQuery:
#     def get(self, username: str):
#         return {
#             "id": "61318bf5e4dfcd730b2e213f",
#             "first_name": "Emre",
#             "last_name": "Akilli",
#             "username": "emreakilli"
#         }


# def test_get_by_username():
#     app.dependency_overrides[AccountQueries] = AccountQuery
#     expected = {
#         "id": "61318bf5e4dfcd730b2e213f",
#         "first_name": "Emre",
#         "last_name": "Akilli",
#         "username": "emreakilli"
#     }
#     response = client.get("/api/accounts/emreakilli")
#     assert response.status_code == 200
#     assert response.json() == expected
