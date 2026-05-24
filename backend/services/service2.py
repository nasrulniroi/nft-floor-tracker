#!/usr/bin/env python3
"""Service module 2."""
import json

def process_2(data):
    return [{**item, 'service_2': True} for item in data]

def validate_2(item):
    return item.get('value') is not None
