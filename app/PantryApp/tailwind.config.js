module.exports = {
    content: [],
    content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {
            colors: {
                white: '#ffffff',
                black: '#000000',
                gray: {
                  100: '#f0f0f0',
                  200: '#e8e8e8',
                  300: '#ddd',
                  400: '#ccc',
                  500: '#666',
                  600: '#333',
                },
                blue: {
                  500: '#007AFF',
                },
                danger: {
                  500: '#ff4444',
                },
                warning: {
                  500: '#ffbb33',
                },
                slate: {
                  100: '#f1f5f9',
                  200: '#e2e8f0',
                },
                neutral: {
                  800: '#18181b',
                },
              },
        },
      },
      plugins: [],
    }