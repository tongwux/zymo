# ZYMO Research Project Management System

A modern React-based web application for managing sequencing projects and laboratory services at ZYMO Research.

## Features

### Dashboard
- Project statistics and overview
- Recent updates and notifications
- To-do list for task management
- Real-time project status tracking

### Project Management
- **Ongoing Projects**
  - View active project status
  - Track project progress
  - Step-by-step progress monitoring
  - Project details and updates

- **Completed Projects**
  - Access completed project reports
  - Download raw data
  - View project details and metrics
  - Add and manage project notes

### Services
- Browse available sequencing services
- Detailed service information
- Easy order placement
- Customizable service options

### Cart System
- Add services to cart
- Review order details
- Secure checkout process
- Order confirmation

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/tongwux/zymo.git
cd zymo
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Project Structure

```
zymo/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── OngoingProjects.js
│   │   ├── CompletedProjects.js
│   │   ├── Services.js
│   │   └── ...
│   ├── context/
│   │   └── CartContext.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Key Features

1. **Project Tracking**
   - Real-time status updates
   - Progress visualization
   - Step completion tracking

2. **Report Management**
   - Generate and view reports
   - Download raw data
   - Add project notes

3. **User Interface**
   - Modern, responsive design
   - Intuitive navigation
   - Real-time notifications

4. **Service Management**
   - Service catalog
   - Order processing
   - Cart management

## Technologies Used

- React.js
- React Router
- React Icons
- Context API for state management
- CSS for styling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved. 