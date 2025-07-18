const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./firebase');
const db = admin.firestore();

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));



app.get('/api/products', async (req, res) => {
  try {
    const snapshot = await db.collection('products').get();
    const products = snapshot.docs.map(doc => doc.data());
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const { name, price, image } = req.body;
    console.log("Received:", { name, price, image });  // ✅ log input

    if (!name || !price || !image) {
      return res.status(400).json({ error: "All fields are required." });
    }

    await db.collection('products').add({ name, price, image });
    res.send({ message: 'Product added' });
  } catch (err) {
    console.error("❌ Error adding product:", err.message);  // ✅ log error
    res.status(500).json({ error: err.message });
  }
});



app.post("/api/orders", async (req, res) => {
  try {
    const { userId, items } = req.body;
    const order = {
      userId,
      items,
      createdAt: new Date()
    };
    await db.collection("orders").add(order);
    res.send({ message: "Order placed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/api/allorders", async (req, res) => {
  try {
    const snapshot = await db.collection("orders").get();
    const orders = snapshot.docs.map(doc => doc.data());
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/myorders', async (req, res) => {
  const { userId } = req.query;
  const snapshot = await db.collection("orders").where("userId", "==", userId).get();
  const orders = snapshot.docs.map(doc => doc.data());
  res.json(orders);
});

// 🟢 Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
