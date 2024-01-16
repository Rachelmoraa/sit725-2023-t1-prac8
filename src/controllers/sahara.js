
const { default: mongoose } = require("mongoose");
const {
    sitesSchema
} = require("../models/sites.model");
require("../dbConfigs/db.js");
const siteModel = mongoose.model("sites", sitesSchema)

const home = async (req, res) => {
    const sites = await siteModel.find();
    res.render("index.ejs", {
        sites: sites
    })
}

const uploadForm = async (req, res) => {
    res.render("newForm.ejs");
}

const newSite = async (req, res) => {
    try {
        const filepath = `uploads/${req.file.filename}`;
        req.body.profile = filepath;
        const site = new siteModel(req.body)
        await site.save()
        res.redirect("/")
    } catch (error) {
        res.json({ success: "false", message: "an error occured while creating the site" });
        console.log(error);
    }
}

module.exports = {
    home,
    newSite,
    uploadForm
}
