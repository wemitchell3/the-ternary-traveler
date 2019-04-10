const apiBaseUrl = "http://localhost:8088"

const api = {
    getOnePOI(endpoint, entryId) {
        return fetch(`${apiBaseUrl}/${endpoint}/${entryId}`).then(res => res.json())
    },
    getAllPOIs(endpoint) {
        return fetch(`${apiBaseUrl}/${endpoint}`).then(res => res.json())
    },
    postOnePOI(endpoint, entry) {
        return fetch(`${apiBaseUrl}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    deleteOnePOI(endpoint, entryId) {
        return fetch(`${apiBaseUrl}/${endpoint}/${entryId}`, {
            method: "DELETE"
        }).then(res => res.json())
    },
    patchOnePOI(endpoint, entryId, entry) {
        return fetch(`${apiBaseUrl}/${endpoint}/${entryId}`, {
            method: "PATCH",
            hearders: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }
}

export default api