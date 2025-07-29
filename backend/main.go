package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello from Go backend")
}

func main() {
	http.HandleFunc("/api", handler)
	fmt.Println("Go server running at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
