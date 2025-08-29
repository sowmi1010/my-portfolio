# My Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Responsive design
- Modern UI with smooth animations
- Project showcase with Swiper
- Skills section
- Experience timeline
- Contact form
- Dark mode toggle

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Swiper (project carousel)
- Heroicons
- Lucide React

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sowmi1010/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Automatic Deployment

The project is set up to deploy automatically when you push to the `main` branch.

## Configuration

- **Vite Config**: Base path is set to `/my-portfolio/` for GitHub Pages
- **Package.json**: Includes homepage field for GitHub Pages URL
- **Build Output**: Files are built to `dist/` directory

## Project Structure

```
src/
├── components/     # React components
├── data/          # JSON data files
├── assets/        # Images and static files
└── App.jsx        # Main app component
```

## Customization

1. Update project data in `src/data/projects.js`
2. Modify skills in `src/data/skills.json`
3. Update experience in `src/data/experience.json`
4. Replace images in `src/assets/`
5. Customize styling in `src/index.css`

## Live Demo

The portfolio is live at: [https://sowmi1010.github.io/my-portfolio](https://sowmi1010.github.io/my-portfolio)

## License

This project is open source and available under the [MIT License](LICENSE).
