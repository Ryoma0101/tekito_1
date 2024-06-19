package main

import (
    "encoding/json"
    "net/http"
)

type Message struct {
    Message string `json:"message"`
}

func main() {
    http.HandleFunc("/api/message", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(Message{Message: "Hello from Go!"})
    })

    http.ListenAndServe(":8080", nil)
}
