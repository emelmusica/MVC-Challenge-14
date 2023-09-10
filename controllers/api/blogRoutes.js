const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { BlogPost, Category } = require("../../models");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const blogPostTitle = req.body.blogPostTitle;
    const sanitizedTitle = blogPostTitle.replace(/[^a-zA-Z0-9]/g, "_");
    req.filename = `${sanitizedTitle}${path.extname(file.originalname)}`;
    cb(null, req.filename);
  },
});

const upload = multer({ storage: storage });

router.post("/post-blog", upload.single("image"), async (req, res) => {
  try {
    console.log("Req Body:", req.body);
    console.log("Req File:", req.file);

    const { blogPostTitle, category, content } = req.body;

    const category_id = category.toLowerCase() === "technology" ? 1 : 2;

    // Create a new blog post record
    const blogPostData = await BlogPost.create({
      title: blogPostTitle,
      category_id: category_id,
      content,
      image: `/images/${req.filename}`,
    });

    console.log("Created Blog Post Data:", blogPostData);

    res.status(200).json(blogPostData);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [Category],
    });
    const formattedBlogPostData = blogPostData.map((post) =>
      post.get({ plain: true })
    );
    res.status(200).json(formattedBlogPostData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [Category],
    });
    const formattedBlogPostData = blogPostData.get({ plain: true });
    res.status(200).json(formattedBlogPostData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
