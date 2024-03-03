package main

import (
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"github.com/joho/godotenv"
)


func main() {

	// load .env
	godotenv.Load(".env");
	portString := os.Getenv("PORT");

	if portString == "" {
		log.Fatal("PORT is not found in the enviroment");
	}

	// create a new router
	router := chi.NewRouter();

	// define cors options
	router.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://*", "https://*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"*"},
		ExposedHeaders: []string{"Link"},
		AllowCredentials: false,
		MaxAge: 300,
	}))

	v1Router := chi.NewRouter();
	v1Router.Get("/test", handlerReadiness);
	v1Router.Get("/err", handleErr)


	srv := &http.Server{
		Handler: router,
		Addr: ":"+portString,
	}

	router.Mount("/v1", v1Router);

	log.Printf("Server starting on port %v", portString);

	err := srv.ListenAndServe();
	if err != nil {
		log.Fatal(err);
	}
}
