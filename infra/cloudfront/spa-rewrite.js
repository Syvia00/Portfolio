function handler(event) {
  const request = event.request;
  const lastSegment = request.uri.split("/").pop();
  if (!lastSegment.includes(".")) {
    request.uri = "/index.html";
  }
  return request;
}
