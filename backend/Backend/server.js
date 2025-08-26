// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("./Models/User");
// const Volun = require("./Models/Volun");

// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect("mongodb://localhost:27017/project", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(async() =>{ console.log("Connected to MongoDB");
//     const adminDb = mongoose.connection.db.admin();
//     const info = await adminDb.serverStatus();
//     console.log("MongoDB Info:", info.version);
// })
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Routes

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) {
//     console.log("No token provided");
//     return res.status(401).json({ message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// app.get("/verify", authMiddleware, async (req, res) => {
//   const user = await User.findById(req.userId);
//   res.json({ username: user.username });
// });


// app.post("/signup", async (req, res) => {
//   const { username, email, password } = req.body;


//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save new user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.post("/login", async (req, res) => {
  

//   try {
//     // Find user by email
//     const { username, password } = req.body;
//     console.log("Incoming Login Request:", req.body);

//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid username or password" });
//     }
//     console.log("User found:", user);
//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }
//     console.log("Password match");
//     // Generate JWT
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h"});
//     console.log("Token generated:", token);

//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });


// //Volun
// app.get("/verifyVolun", authMiddleware, async (req, res) => {
//   const user = await Volun.findById(req.userId);
//   res.json({ username: user.username });
// });


// //volun signup
// app.post("/volsignup", async (req, res) => {
//   try {
//     const { userName, firstName, lastName, email, contact, password } = req.body;

//     if (!userName || !email || !contact || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Check for duplicates
//     const existingUser = await Volun.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash password and save user
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new Volun({
//       userName,
//       firstName,
//       lastName,
//       email,
//       contact,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     console.error("Error during volsignup:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// //volun login

// app.post("/vollogin", async (req, res) => {
//   try {
//     // Extract the username and password from the request body
//     const { userName, password } = req.body;

//     // Log incoming request (for debugging)
//     console.log("Incoming Login Request:", req.body);

//     // Validate request body (ensure both userName and password are provided)
//     if (!userName || !password) {
//       return res.status(400).json({ message: "Both username and password are required" });
//     }

//     // Find the user by username
//     const user = await Volun.findOne({ userName});
//     console.log("Request Body:", userName);
//     console.log("Database Response:", user);

//     // If user not found, return error
//     if (!user) {
//       return res.status(400).json({ message: "Invalid username or password" });
//     }


//     // Log the found user (for debugging)
//     console.log("User found:", user);

//     // Compare the provided password with the stored password
//     const isMatch = await bcrypt.compare(password, user.password);

//     // If passwords don't match, return error
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid username or password" });
//     }

//     // Log the password match success (for debugging)
//     console.log("Password match");

//     // Generate a JWT token with user ID (valid for 24 hours)
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "24h"
//     });

//     // Log the generated token (for debugging)
//     console.log("Token generated:", token);

//     // Return the success response with the JWT token
//     return res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token,
//     });

//   } catch (error) {
//     // Log the error (for debugging)
//     console.error("Error during login:", error);

//     // Return a server error response if something goes wrong
//     return res.status(500).json({ message: "Server error" });
//   }
// });


// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./Models/User");
const Volun = require("./Models/Volun");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (using Atlas)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ Connected to MongoDB Atlas");
    const adminDb = mongoose.connection.db.admin();
    const info = await adminDb.serverStatus();
    console.log("MongoDB Info:", info.version);
  })
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// JWT Auth Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Routes
app.get("/verify", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ username: user.username });
});

// Signup
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Incoming Login Request:", req.body);

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid username or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid username or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Volunteer Routes
app.get("/verifyVolun", authMiddleware, async (req, res) => {
  const user = await Volun.findById(req.userId);
  res.json({ username: user.username });
});

app.post("/volsignup", async (req, res) => {
  try {
    const { userName, firstName, lastName, email, contact, password } = req.body;
    if (!userName || !email || !contact || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await Volun.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Volun({ userName, firstName, lastName, email, contact, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "Volunteer registered successfully!" });
  } catch (error) {
    console.error("Error during volsignup:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/vollogin", async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) return res.status(400).json({ message: "Both username and password are required" });

    const user = await Volun.findOne({ userName });
    if (!user) return res.status(400).json({ message: "Invalid username or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid username or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });

    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
