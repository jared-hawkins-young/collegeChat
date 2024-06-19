// Provide simple handlers for GET and POST requests with type annotations
export async function GET(request: any): Promise<Response> {
    return new Response('GET request handled', { status: 200 });
  }
  
  export async function POST(request: any): Promise<Response> {
    return new Response('POST request handled', { status: 200 });
  }
  