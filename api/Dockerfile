FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

COPY requirements.txt requirements.txt
COPY main.py main.py
COPY authenticator.py authenticator.py

COPY queries queries
COPY routers routers
COPY models models
COPY tests tests

RUN python -m pip install -r requirements.txt

CMD uvicorn main:app --reload --host 0.0.0.0 --port 80
