const express = require("express");
const router = express.Router();
const {User,Blog} = require("../models");

router.get("/", (req, res) => {
  Blog.findAll({})
    .then(dbBlogs => {
      res.json(dbBlogs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.get("/:id", (req, res) => {
  Blog.findByPk(req.params.id,{})
    .then(dbBlog => {
      res.json(dbBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", (req, res) => {
  console.log("FRENCH FRIES AND MASHED POTATOES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  if(!req.session.user){
    return res.status(401).json({msg:"Please login to create a new blog."})
}
  Blog.create({
    title:req.body.title,
    body:req.body.body,
    UserId:req.session.user.id
  })
    .then(newBlog => {
      res.json(newBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.put("/:id", (req, res) => {
  Blog.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedBlog => {
    res.json(updatedBlog);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

// router.delete("/:id", (req, res) => {
//   Blog.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(delBlog => {
//     res.json(delBlog);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({ msg: "an error occured", err });
//   });
// });

router.delete("/", (req, res) => {
  if(!req.session.user){
    return res.status(401).json({msg:"Please login to delete a blog."})
}
  Blog.destroy({
    title:req.body.title,
    body:req.body.body,
    UserId:req.session.user.id
  })
    .then(newBlog => {
      res.json(newBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
