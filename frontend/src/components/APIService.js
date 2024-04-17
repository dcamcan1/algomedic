export default class APIService {
  static UpdateEncounter(enc_num, body) {
    return fetch(`http://127.0.0.1:5000/update/${enc_num}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static InsertEncounter(body) {
    return fetch(`http://127.0.0.1:5000/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static DeleteEncounter(enc_num) {
    return fetch(`http://127.0.0.1:5000/delete/${enc_num}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
