package indexer

import "log"

func Index1(data []byte) error {
	log.Printf("Indexing 1: %d bytes", len(data))
	return nil
}
