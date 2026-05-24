package models

import "time"

type Model0 struct {
	ID        uint64    `json:"id"`
	Name      string    `json:"name"`
	Value     float64   `json:"value"`
	CreatedAt time.Time `json:"created_at"`
}
