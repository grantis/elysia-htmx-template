
import { Html } from '@elysiajs/html';

export const Diagram = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
        <rect width="800" height="500" fill="#f8f9fa" rx="10" ry="10" />

        <rect x="50" y="50" width="200" height="150" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="10" ry="10" />
        <text x="150" y="85" font-family="Arial" font-size="16" text-anchor="middle" font-weight="bold">Client (Browser)</text>
        <rect x="75" y="100" width="150" height="80" fill="#bbdefb" stroke="#1565c0" stroke-width="1" rx="5" ry="5" />
        <text x="150" y="145" font-family="Arial" font-size="14" text-anchor="middle">Renders HTML</text>

        <path d="M250 125 L350 125" stroke="#1565c0" stroke-width="2" marker-end="url(#arrow)" />
        <text x="300" y="115" font-family="Arial" font-size="12" text-anchor="middle">HTTP Request</text>
        <text x="300" y="155" font-family="Arial" font-size="10" text-anchor="middle" fill="#555">GET /users/123</text>

        <rect x="350" y="50" width="200" height="400" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="10" ry="10" />
        <text x="450" y="75" font-family="Arial" font-size="16" text-anchor="middle" font-weight="bold">Server</text>

        <rect x="375" y="90" width="150" height="80" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1" rx="5" ry="5" />
        <text x="450" y="120" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">Router</text>
        <text x="450" y="140" font-family="Arial" font-size="12" text-anchor="middle">Maps URLs to Controllers</text>

        <rect x="375" y="190" width="150" height="80" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1" rx="5" ry="5" />
        <text x="450" y="220" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">Controller</text>
        <text x="450" y="240" font-family="Arial" font-size="12" text-anchor="middle">Processes Request</text>

        <rect x="375" y="290" width="150" height="80" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1" rx="5" ry="5" />
        <text x="450" y="320" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">Model</text>
        <text x="450" y="340" font-family="Arial" font-size="12" text-anchor="middle">Business Logic &amp; Data</text>

        <rect x="375" y="390" width="150" height="80" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1" rx="5" ry="5" />
        <text x="450" y="420" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">View/Template</text>
        <text x="450" y="440" font-family="Arial" font-size="12" text-anchor="middle">Generates HTML</text>

        <rect x="600" y="290" width="150" height="100" fill="#ffebee" stroke="#c62828" stroke-width="2" rx="10" ry="10" />
        <text x="675" y="320" font-family="Arial" font-size="16" text-anchor="middle" font-weight="bold">Database</text>
        <text x="675" y="340" font-family="Arial" font-size="12" text-anchor="middle">Stores Application</text>
        <text x="675" y="360" font-family="Arial" font-size="12" text-anchor="middle">Data</text>

        <path d="M525 330 L600 330" stroke="#c62828" stroke-width="2" marker-end="url(#arrow)" />
        <text x="562" y="320" font-family="Arial" font-size="12" text-anchor="middle">Query</text>

        <path d="M450 170 L450 190" stroke="#2e7d32" stroke-width="2" marker-end="url(#arrow)" />
        <path d="M450 270 L450 290" stroke="#2e7d32" stroke-width="2" marker-end="url(#arrow)" />
        <path d="M450 370 L450 390" stroke="#2e7d32" stroke-width="2" marker-end="url(#arrow)" />

        <path d="M350 430 L250 430" stroke="#1565c0" stroke-width="2" marker-end="url(#arrow)" />
        <text x="300" y="420" font-family="Arial" font-size="12" text-anchor="middle">HTTP Response</text>
        <text x="300" y="450" font-family="Arial" font-size="10" text-anchor="middle" fill="#555">HTML Content</text>

        <rect x="50" y="380" width="200" height="100" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="10" ry="10" />
        <text x="150" y="410" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">Displayed Page</text>
        <text x="150" y="430" font-family="Arial" font-size="12" text-anchor="middle">User Profile #123</text>
        <text x="150" y="450" font-family="Arial" font-size="12" text-anchor="middle">with Data from Database</text>

        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 Z" fill="#333" />
          </marker>
        </defs>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350">
        <rect width="800" height="350" fill="#f8f9fa" rx="10" ry="10" />

        <rect x="50" y="50" width="300" height="250" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="10" ry="10" />
        <text x="200" y="80" font-family="Arial" font-size="16" text-anchor="middle" font-weight="bold">Application Code</text>

        <rect x="75" y="100" width="250" height="180" fill="#bbdefb" stroke="#1565c0" stroke-width="1" rx="5" ry="5" />
        <text x="200" y="125" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">User Model (Class)</text>

        <text x="100" y="155" font-family="monospace" font-size="12" fill="#333">class User:</text>
        <text x="120" y="175" font-family="monospace" font-size="12" fill="#333">id: int</text>
        <text x="120" y="195" font-family="monospace" font-size="12" fill="#333">username: string</text>
        <text x="120" y="215" font-family="monospace" font-size="12" fill="#333">email: string</text>
        <text x="120" y="235" font-family="monospace" font-size="12" fill="#333">created_at: datetime</text>
        <text x="100" y="255" font-family="monospace" font-size="12" fill="#333">def get_posts(self): ...</text>

        <rect x="400" y="130" width="100" height="90" fill="#fff3e0" stroke="#e65100" stroke-width="2" rx="10" ry="10" />
        <text x="450" y="175" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">ORM</text>

        <rect x="550" y="50" width="200" height="250" fill="#ffebee" stroke="#c62828" stroke-width="2" rx="10" ry="10" />
        <text x="650" y="80" font-family="Arial" font-size="16" text-anchor="middle" font-weight="bold">Database</text>

        <rect x="575" y="100" width="150" height="180" fill="#ffcdd2" stroke="#c62828" stroke-width="1" rx="5" ry="5" />
        <text x="650" y="125" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">users Table</text>

        <line x1="575" y1="140" x2="725" y2="140" stroke="#c62828" stroke-width="1" />
        <text x="595" y="155" font-family="monospace" font-size="12" fill="#333">id</text>
        <text x="595" y="175" font-family="monospace" font-size="12" fill="#333">username</text>
        <text x="595" y="195" font-family="monospace" font-size="12" fill="#333">email</text>
        <text x="595" y="215" font-family="monospace" font-size="12" fill="#333">created_at</text>
        <text x="670" y="155" font-family="monospace" font-size="12" fill="#333">INT PK</text>
        <text x="670" y="175" font-family="monospace" font-size="12" fill="#333">VARCHAR</text>
        <text x="670" y="195" font-family="monospace" font-size="12" fill="#333">VARCHAR</text>
        <text x="670" y="215" font-family="monospace" font-size="12" fill="#333">TIMESTAMP</text>

        <path d="M325 175 L400 175" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
        <text x="362" y="165" font-family="Arial" font-size="12" text-anchor="middle">translate</text>

        <path d="M500 175 L550 175" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
        <text x="525" y="165" font-family="Arial" font-size="12" text-anchor="middle">query</text>

        <text x="200" y="310" font-family="monospace" font-size="12" fill="#1565c0">user = User.find(123)</text>
        <text x="600" y="310" font-family="monospace" font-size="12" fill="#c62828">SELECT * FROM users WHERE id=123</text>
        <path d="M325 310 L550 310" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />

        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 Z" fill="#333" />
          </marker>
        </defs>
      </svg>
    </div>
  )
}
