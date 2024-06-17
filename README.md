# Codecllion - Blog Website

Welcome to the repository for a Blog Website built using Next.js, Tailwind CSS, and Sanity CMS. This project features a modern blog platform where users can access courses, posts, and more.

## Features

- Courses: Comprehensive courses on various topics.
- Posts: Regular blog posts with rich content.
- More: Additional features and enhancements.

## Technologies Used

- Next.js: React framework for server-side rendering and generating static websites.
- Tailwind CSS: Utility-first CSS framework for styling.
- Sanity CMS: Headless CMS for managing content.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cargopip/clh.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blog-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up Sanity CMS:

   Use your information on `./constants/other/sanity.ts` to set up Sanity

5. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following variables:

   ```bash
   GA_MEASUREMENT_ID=Google_analytics_measurment_id
   SANITY_WEBHOOK_SECRET=your_sanity_webhook_secret
   ```

6. Run the development server:

   ```bash
   npm run dev
   ```

7. Open your browser and visit:

   `http://localhost:3000`

## Usage

- Viewing Posts: Navigate through the blog posts to read the content.
- Accessing Courses: Browse through various courses available on the platform.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project

2. Create your Feature Branch:

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. Commit your Changes:

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. Push to the Branch:

   ```bash
   git push origin feature/AmazingFeature
   ```

5. Open a Pull Request

Thank you for visiting the repository and contributing to the project!
