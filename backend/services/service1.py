#!/usr/bin/env python3
"""Service module 1."""
import json

def process_1(data):
    return [{**item, 'service_1': True} for item in data]

def validate_1(item):
    return item.get('value') is not None
