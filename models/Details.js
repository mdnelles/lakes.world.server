const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
   "wb_state",
   {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         allowNull: false,
      },
      lName: {
         type: Sequelize.STRING,
         defaultValue: "na",
         allowNull: true,
      },
      lNnameAlia: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      countries: {
         type: Sequelize.STRING,
         defaultValue: "na",
         allowNull: true,
      },
      continent: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      Lat: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      Lon: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      gLat: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      gLon: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      gMapZoom: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      Altitude: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      SurfaceArea: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      MaxDepth: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      Volume: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      Shoreline: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      catchmentArea: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      residenceTime: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      frozenPeriods: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      frozenMonths: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      mixingType: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      morphDam: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      relatedInfo: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      ilecCode: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      description: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      gMapsLink: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      img: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      settlements: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      age: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      origin: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      fishSpecies: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      other1: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      lakeID: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      other3: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      other4: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      beenCounted: {
         type: Sequelize.STRING,
         allowNull: true,
      },
   },
   {
      timestamps: false,
   }
);
