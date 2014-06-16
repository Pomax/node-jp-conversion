var relations = require("./index");
console.log("children for ⺅: ", relations.getChildren("⺅").join(","));
console.log("children for 木: ", relations.getChildren("木").join(","));
console.log("children for both ⺅ and 木: ", relations.getChildren("⺅","木"));
console.log("relationship information for 休: ", relations.get("休"));
