#!/usr/bin/env python3
"""Model 4."""
from dataclasses import dataclass
from typing import Optional

@dataclass
class Model4:
    id: int
    name: str
    value: float
    active: bool = True
    metadata: Optional[dict] = None
