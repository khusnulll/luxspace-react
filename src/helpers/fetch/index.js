export default function fetchData({ url, method = "GET", host = "https://694dc68a-1939-4e41-9198-e4638dafb209.mock.pstmn.io", body }) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body,
  }).then(async (response) => {
    const statusHasResponse = [200, 404];
    const jsonResponse = statusHasResponse.includes(response.status) ? await response.json() : response;
    if (response.ok) return jsonResponse;

    throw new Error(JSON.stringify(jsonResponse));
  });
}
