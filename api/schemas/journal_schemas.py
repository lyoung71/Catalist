# want to create a serializer, connect journal object to dictionary to see ids and keys of each item


def individual_serial(journal) -> dict:
    return {
        "id": str(journal["_id"]),
        "name": journal["name"],
        "description": journal["description"],
        "complete": journal["complete"],
    }


def list_serial(journals) -> list:
    return [individual_serial(journal) for journal in journals]
