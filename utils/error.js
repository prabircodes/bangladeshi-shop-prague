const getError = (err) =>
  err.response && err.response.data && err.data.messaage
    ? err.response.data.messaage
    : err.messaage

export { getError }
