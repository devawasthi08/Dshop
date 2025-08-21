export default async function handler(req, res) {
  if (req.method === "POST") {
    const log = req.body;

    // 🟢 Shows in Vercel Dashboard → Functions → Logs
    console.log("🟢 Login Log:", log);

    return res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
