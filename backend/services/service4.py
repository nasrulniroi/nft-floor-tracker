#!/usr/bin/env python3
"""Service module 4."""
import json

def process_4(data):
    return [{**item, 'service_4': True} for item in data]

def validate_4(item):
    return item.get('value') is not None
