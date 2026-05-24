#!/usr/bin/env python3
"""Service module 0."""
import json

def process_0(data):
    return [{**item, 'service_0': True} for item in data]

def validate_0(item):
    return item.get('value') is not None
