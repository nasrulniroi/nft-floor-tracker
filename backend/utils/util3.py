#!/usr/bin/env python3
"""Utility 3."""
import hashlib, json

def hash_data(data):
    return hashlib.sha256(json.dumps(data, sort_keys=True).encode()).hexdigest()

def safe_float(val, default=0.0):
    try: return float(val)
    except: return default
