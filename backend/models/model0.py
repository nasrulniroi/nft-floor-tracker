#!/usr/bin/env python3
"""Model 0."""
from dataclasses import dataclass
from typing import Optional

@dataclass
class Model0:
    id: int
    name: str
    value: float
    active: bool = True
    metadata: Optional[dict] = None
