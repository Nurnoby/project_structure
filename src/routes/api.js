const express=require('express');
const blogController=require("../controllers/blogController");
const commentController=require("../controllers/commentController");
const messageController=require("../controllers/messageController");
const portfolioController=require("../controllers/portfolioController");
const productController=require("../controllers/productController");
const router=express.Router();


// blog controller 
router.get("/blogControllerCreate",blogController.create);
router.get("/blogControllerRead",blogController.read);
router.get("/blogControllerDelete",blogController.delete);
router.get("/blogControllerUpdate",blogController.update);
// blog controller 
// Comment controller 
router.get("/commentControllerCreate",commentController.create);
router.get("/commentControllerRead",commentController.read);
router.get("/commentControllerDelete",commentController.delete);
router.get("/commentControllerUpdate",commentController.update);
// Comment controller 
// Comment controller 
router.get("/messageControllerCreate",messageController.create);
router.get("/messageControllerRead",messageController.read);
router.get("/messageControllerDelete",messageController.delete);
router.get("/messageControllerUpdate",messageController.update);
// Comment controller 
// portfolio controller 
router.get("/portfolioControllerCreate",portfolioController.create);
router.get("/portfolioControllerRead",portfolioController.read);
router.get("/portfolioControllerDelete",portfolioController.delete);
router.get("/portfolioControllerUpdate",portfolioController.update);
// portfolio controller 
// product controller 
router.get("/productControllerCreate",productController.create);
router.get("/productControllerRead",productController.read);
router.get("/productControllerDelete",productController.delete);
router.get("/productControllerUpdate",productController.update);
// product controller 

module.exports =router;