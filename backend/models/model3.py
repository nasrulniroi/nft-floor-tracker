#!/usr/bin/env python3
"""Model 3."""
from dataclasses import dataclass
from typing import Optional

@dataclass
class Model3:
    id: int
    name: str
    value: float
    active: bool = True
    metadata: Optional[dict] = None
