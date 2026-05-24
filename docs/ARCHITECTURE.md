# NFT Floor Tracker Architecture

## Overview
Real-time NFT analytics platform monitoring floor prices across major marketplaces.

## Data Flow
1. **Go Scanner**: Monitors blockchain for NFT sale events
2. **Python Backend**: Aggregates floor prices from OpenSea, Blur, Magic Eden
3. **Frontend**: Displays real-time charts, alerts, and whale tracking
4. **Database**: Stores historical floor prices and transaction data
