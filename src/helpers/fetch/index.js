export default function fetchData({ url, method = "GET", host = "https://9a5df1f2-d2f8-4bfb-a9ff-1cd1fa997770.mock.pstmn.io", body }) {
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
