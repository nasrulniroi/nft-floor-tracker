#!/usr/bin/env python3
"""Service module 3."""
import json

def process_3(data):
    return [{**item, 'service_3': True} for item in data]

def validate_3(item):
    return item.get('value') is not None
