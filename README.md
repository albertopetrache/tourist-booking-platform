# E-Tourism Platform (Work in Progress)

This project aims to develop a fully functional full-stack e-tourism platform, including both backend and frontend components, interconnected through RESTful APIs.

## Overview

The platform is designed to provide users with a complete experience for browsing tourism offers and making bookings, while also offering administrators tools to manage content efficiently.

## Backend

The backend is built using Node.js, Express, TypeScript, and MongoDB.

It includes a complete user management system, supporting registration, authentication, logout, and role-based access (user/admin). Security is handled using JWT authentication and password hashing.

The application also manages tourism offers, each containing details such as title, destination, description, price, available dates, and optional images. Administrators can perform full CRUD operations (create, read, update, delete) on these offers.

A booking system is implemented, allowing authenticated users to select an offer, provide the necessary details, and create a reservation. Each booking has a status (e.g., pending, confirmed, cancelled).

Additional backend features include data validation, error handling, and support for filtering offers by criteria such as price, destination, or date, as well as sorting and pagination.

## Frontend

The frontend is developed using React, TypeScript, and Vite, focusing on a modern and intuitive user interface.

It includes several main pages:
- Home (overview of the platform)
- Offers (list of available offers with filtering and search)
- Offer Detail (complete information about a selected offer)
- Booking (reservation form)
- Login and Register (user authentication)

Reusable components such as offer cards, navigation bar, forms, and filtering elements are implemented to ensure a clean and maintainable structure.

The frontend communicates with the backend through API services (using fetch or axios), and application state is managed using React hooks such as useState and useEffect.

Authentication persistence is handled through JWT storage, and certain routes (booking or admin panel) are protected. User feedback messages are also implemented for a better user experience.

## Application Flow

A typical user flow includes:
1. Accessing the platform
2. Browsing available offers
3. Filtering or searching results
4. Viewing offer details
5. Registering or logging in
6. Creating a booking

Administrators have access to a dedicated panel where they can manage offers and potentially bookings.

## Development Process

The project is developed step by step:
1. Backend setup and database configuration
2. API development and testing
3. Frontend development
4. Integration between frontend and backend
5. Authentication implementation
6. Final testing and deployment
