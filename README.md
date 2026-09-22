# website

the frontend for my personal website.

## stack

- React
- TypeScript
- Vite
- Tailwind CSS

## pages

- `/` — personal home page;
- `/shortener` — interface for creating shortened links;
- `/napkin` — interface for creating or entering a Napkin room;
- `/napkin/:code` — real-time Napkin editor.

## API integration

the frontend consumes the two backend APIs from the other repositories:

- `linkshortener` for creating short URLs;
- `napkin` for reading, creating and editing Napkin rooms.

the API URLs are configured at build time through Vite environment variables:

```env
VITE_SHORTENER_API_URL=http://localhost:8081
VITE_NAPKIN_API_URL=http://localhost:8082
VITE_SHORTENER_RESPONSE_ALTERNATIVE_URL=http://localhost:8081