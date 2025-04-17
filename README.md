# Real-Time Bus Tracking System

A web-based real-time bus tracking system that allows drivers to share their location and passengers to find and track buses. Built using Python (Flask) for the backend and HTML/CSS/JavaScript for the frontend, with Leaflet.js for map integration.

## Features

### Driver Features
- Driver registration and login
- Bus information submission
- Real-time location sharing
- Live location tracking on map

### Passenger Features
- Search for buses based on current location and destination
- View bus routes and major cities
- Track selected bus on map in real-time

## Technology Stack
- Backend: Python (Flask)
- Frontend: HTML, CSS, JavaScript
- Maps: Leaflet.js
- Data Storage: JSON files (JSON file is a text file that uses JavaScript Object Notation (JSON) to store data)

## Project Structure
```
.
├── server.py             # Flask backend server
├── index.html            # Landing page
├── driver_login.html     # Driver login page
├── driver_signup.html    # Driver registration page
├── bus_info.html         # Bus information submission page
├── track.html            # Live bus tracking page
├── passenger.html        # Passenger interface
├── styles.css            # CSS styles
├── drivers.json          # Driver data storage
└── bus_locations.json    # Bus location data storage
```

## Installation

1. Install the required dependencies:
```bash
pip install -r requirements.txt
```

2. Run the Flask server:
```bash
python server.py
```

3. Open `index.html` in your web browser to access the system.

## Usage

### For Drivers
1. Register a new account or login with existing credentials
2. Submit bus information (starting point, ending point, major cities, bus plate)
3. Start location sharing to begin tracking
4. View live location on map

### For Passengers
1. Enter current location and destination
2. View available buses matching the route
3. Click on a bus to track its live location on map

## JSON Data Structure

### drivers.json
```json
[
  {
    "driver_id": "1",
    "full_name": "Admin",
    "email": "admin@gmail.com",
    "password": "Admin@123"
  }
]
```

### bus_locations.json
```json
[
  {
    "driver_id": "1",
    "start": "Nagpur",
    "end": "Akola",
    "major_cities": [
      "Wardha",
      "Pulgaon",
      "Amravati",
      "Murtizapur"
    ],
    "plate": "MH22AB1234",
    "latitude": 20.712278567012167,
    "longitude": 78.57459181350245,
    "timestamp": "2025-04-15T12:05:43.130170"
  }
]
```

## API Endpoints

- `POST /register_driver` - Register a new driver
- `POST /login_driver` - Login driver
- `POST /submit_bus_info` - Submit bus information and location
- `POST /find_buses` - Find buses matching route
- `GET /get_bus_location` - Get current bus location
