package indexer

import "log"

func Index0(data []byte) error {
	log.Printf("Indexing 0: %d bytes", len(data))
	return nil
}
