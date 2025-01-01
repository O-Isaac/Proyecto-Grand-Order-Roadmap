export const dynamic = "auto";

export async function GET() {
  const req = await fetch(process.env.ENDPOINT!);
  const res = await req.json();
  return Response.json(res);
}
