#!/usr/bin/env python3
"""Scrape NFT floor prices from multiple sources."""
import requests, json, time

def fetch_opensea(slug):
    try:
        r = requests.get(f"https://api.opensea.io/api/v1/collection/{slug}/stats", timeout=10)
        return r.json() if r.status_code == 200 else None
    except: return None

def fetch_blur(slug):
    try:
        r = requests.get(f"https://api.blur.finance/v1/collections/{slug}", timeout=10)
        return r.json() if r.status_code == 200 else None
    except: return None

def track_floor(collection_slug, interval=60):
    while True:
        data = fetch_opensea(collection_slug)
        if data:
            print(f"Floor: {data.get('stats',{}).get('floor_price','N/A')} ETH")
        time.sleep(interval)
