'use strict';
const turf = require('@turf/turf');
const arcGIS = require('terraformer-arcgis-parser');

export default class DataLoader extends HTMLElement {
  static get observedAttributes() {
    return ['data-loader-state', 'data-parcel-id'];
  }

  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create result section
    const loaderWrapper = document.createElement('section');
    loaderWrapper.id = 'loader-wrapper';
    shadow.appendChild(loaderWrapper);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const shadow = this.shadowRoot;
    // console.log(`Loader - attribute: ${name}, old: ${oldValue}, new: ${newValue}`);
    switch (name) {
      case 'data-loader-state':
        this.clearLoader(this);
        this.loadLoader(this);
        break;

      default:
        break;
    }
  }

  getDataSets() {
    const app = document.getElementsByTagName('my-home-info');
    const dataSets = app[0].getAttribute('data-active-sets').split(',');
    const parcelData = JSON.parse(app[0].getAttribute('data-parcel-id'));
    let dataList = [];

    let assessorsData = new Promise((resolve, reject) => {
      if (parcelData.attributes.parcel_id == 'CONDO BUILDING') {
        resolve({ "id": "assessors-data", "data": null });
      } else {
        let url = "https://apis.detroitmi.gov/assessments/parcel/" + parcelData.attributes.parcel_id + "/";
        return fetch(url)
          .then((resp) => resp.json()) // Transform the data into json
          .then(function (data) {
            resolve({ "id": "assessors-data", "data": data });
          }).catch(err => {
            // console.log(err);
          });
      }
    });

    let neighborhoods = new Promise((resolve, reject) => {
      resolve({ "id": "neighborhood", "data": parcelData });
    });

    let council = new Promise((resolve, reject) => {
      return resolve({ "id": "council", "data": parcelData });
    });
    let districtManagers = new Promise((resolve, reject) => {
      let url = "/rest/district-managers?_format=json";
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "district-managers", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let districtInspectors = new Promise((resolve, reject) => {
      let url = "/rest/district-inspectors?_format=json";
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "district-inspectors", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let councilMembers = new Promise((resolve, reject) => {
      let url = "/rest/council-members?_format=json";
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "council-members", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let DWSDBackupProtection = new Promise((resolve, reject) => {
      resolve({ "id": "DWSDBackupProtection", "data": parcelData });
    });
    let nrsa = new Promise((resolve, reject) => {
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/NRSA_2020/FeatureServer/0/query?where=&objectIds=&time=&geometry=${parcelData.location.x}%2C${parcelData.location.y}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=`
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "nrsa", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let nezHomestead = new Promise((resolve, reject) => {
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/ArcGIS/rest/services/NEZHOMESTEAD2021/FeatureServer/0/query?where=&objectIds=&time=&geometry=${parcelData.location.x}%2C${parcelData.location.y}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=`
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "nez", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let permitData = new Promise((resolve, reject) => {
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/ArcGIS/rest/services/BuildingPermits/FeatureServer/0/query?where=parcel_id+%3D+%27${parcelData.attributes.parcel_id}%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=3&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "permit-data", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let rentalData = new Promise((resolve, reject) => {
      let url;
      if (parcelData.attributes.parcel_id != 'CONDO BUILDING') {
        url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/ArcGIS/rest/services/RentalStatuses/FeatureServer/0/query?where=parcel_id+%3D+%27${parcelData.attributes.parcel_id}%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json`;
      } else {
        url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/ArcGIS/rest/services/RentalStatuses/FeatureServer/0/query?where=&objectIds=&time=&geometry=${parcelData.location.x}%2C+${parcelData.location.y}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIndexIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=&resultOffset=&resultRecordCount=&f=json`;
      }
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "rental-data", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let rentalCertData = new Promise((resolve, reject) => {
      let url;
      if (parcelData.attributes.parcel_id != 'CONDO BUILDING') {
        url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/ArcGIS/rest/services/active_cofc/FeatureServer/0/query?where=parcel_id%3D%27${parcelData.attributes.parcel_id}%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=1&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json`;
      } else {
        url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/ArcGIS/rest/services/active_cofc/FeatureServer/0/query?where=&objectIds=&time=&geometry=${parcelData.location.x}%2C+${parcelData.location.y}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIndexIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=&resultOffset=&resultRecordCount=&f=json`;
      }
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "rental-cert-data", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let blightData = new Promise((resolve, reject) => {
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/Blight_Violations_(DAH)/FeatureServer/0/query?where=parcelno%3D%27${parcelData.attributes.parcel_id}%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=violation_date&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=2&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "blight-data", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let salesHistoryData = new Promise((resolve, reject) => {
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/Property_Sales/FeatureServer/0/query?where=PARCEL_NO%3D%27${parcelData.attributes.parcel_id}%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=4326&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=SALE_DATE&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=2&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "sales-data", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let demosData = new Promise((resolve, reject) => {
      let point = turf.point([parcelData.location.x, parcelData.location.y]);
      let buffer = turf.buffer(point, 1, { units: 'miles' });
      let simplePolygon = turf.simplify(buffer.geometry, { tolerance: 0.005, highQuality: false });
      let arcsimplePolygon = arcGIS.convert(simplePolygon);
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/Demolitions_under_Contract/FeatureServer/0/query?where=&objectIds=&time=&geometry=${encodeURI(JSON.stringify(arcsimplePolygon))}&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=3&f=geojson`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "demos-data", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let stabilizationData = new Promise((resolve, reject) => {
      let point = turf.point([parcelData.location.x, parcelData.location.y]);
      let buffer = turf.buffer(point, 1, { units: 'miles' });
      let simplePolygon = turf.simplify(buffer.geometry, { tolerance: 0.005, highQuality: false });
      let arcsimplePolygon = arcGIS.convert(simplePolygon);
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/Contracted_Stabilizations/FeatureServer/0/query?where=&objectIds=&time=&geometry=${encodeURI(JSON.stringify(arcsimplePolygon))}&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=3&f=geojson`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "stabilization-data", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let demoStatus = new Promise((resolve, reject) => {
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/Demolitions_under_Contract/FeatureServer/0/query?where=parcel_id+%3D+%27${parcelData.attributes.parcel_id}%27&objectIds=&time=&geometry=&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=4326&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=demolish_by_date&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=1&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "demo-status", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let schools = new Promise((resolve, reject) => {
      let point = turf.point([parcelData.location.x, parcelData.location.y]);
      let buffer = turf.buffer(point, 1, { units: 'miles' });
      let simplePolygon = turf.simplify(buffer.geometry, { tolerance: 0.005, highQuality: false });
      let arcsimplePolygon = arcGIS.convert(simplePolygon);
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/ArcGIS/rest/services/2018_2019_Schools_(EEM)/FeatureServer/0/query?where=&objectIds=&time=&geometry=${encodeURI(JSON.stringify(arcsimplePolygon))}&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "schools", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let npo = new Promise((resolve, reject) => {
      let url = `https://opengis.detroitmi.gov/opengis/rest/services/PublicSafety/NeighborhoodPoliceOfficers/FeatureServer/0/query?where=&objectIds=&time=&geometry=${parcelData.location.x}%2C${parcelData.location.y}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&resultType=none&distance=1&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=4326&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "npo", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let improveDet = new Promise((resolve, reject) => {
      let point = turf.point([parcelData.location.x, parcelData.location.y]);
      let buffer = turf.buffer(point, 300, { units: 'meters' });
      let simplePolygon = turf.simplify(buffer.geometry, { tolerance: 0.005, highQuality: false });
      let arcsimplePolygon = arcGIS.convert(simplePolygon);
      let url = `https://opengis.detroitmi.gov/opengis/rest/services/DoIT/ImproveDetroitIssues/FeatureServer/0/query?where=status+%3C%3E+%27Closed%27+and+status+%3C%3E+%27Archived%27&objectIds=&time=&geometry=${encodeURI(JSON.stringify(arcsimplePolygon))}&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=3&f=geojson`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "improve-det", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let recycling = new Promise((resolve, reject) => {
      let url = "https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/WasteCollectionAreas/FeatureServer/0/query?where=&text=&objectIds=&time=&geometry=" + parcelData.location.x + "%2C+" + parcelData.location.y + "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=json";
      fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          let today = new Date();
          let todaysMonth = today.getMonth() + 1;
          let todaysYear = today.getFullYear();
          let url = `https://apis.detroitmi.gov/waste_schedule/details/${data.features[0].attributes.FID}/year/${todaysYear}/month/${todaysMonth}/`;
          return fetch(url)
            .then((resp) => resp.json()) // Transform the data into json
            .then(function (data) {
              resolve({ "id": "recycling", "data": data });
            });
        }).catch(err => {
          // console.log(err);
        });
    });
    let historicDistrict = new Promise((resolve, reject) => {
      let url = "https://services2.arcgis.com/qvkbeam7Wirps6zC/ArcGIS/rest/services/Detroit_Local_Historic_Districts/FeatureServer/0/query?where=&text=&objectIds=&time=&geometry=" + parcelData.location.x + "%2C+" + parcelData.location.y + "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=json";
      fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "historicDistrict", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    let fireEscrow = new Promise((resolve, reject) => {
      let url = `https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/fie_properties_final/FeatureServer/0/query?where=parcel_id%3D%27${parcelData.attributes.parcel_id}%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnHiddenFields=false&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=`;
      return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          resolve({ "id": "fireEscrow", "data": data });
        }).catch(err => {
          // console.log(err);
        });
    });
    dataSets.forEach(f => {
      switch (f) {
        case 'council':
          dataList.push(council);
          break;

        case 'neighborhood':
          dataList.push(neighborhoods);
          break;

        case 'assessors-data':
          if (parcelData.attributes.parcel_id != null && parcelData.attributes.parcel_id != '') {
            if (parcelData.attributes.parcel_id == 'CONDO BUILDING') {
            } else {
              dataList.push(assessorsData);
            }
          }
          break;

        case 'permit-data':
          if (parcelData.attributes.parcel_id != null && parcelData.attributes.parcel_id != '') {
            dataList.push(permitData);
          }
          break;

        case 'blight-data':
          if (parcelData.attributes.parcel_id != null && parcelData.attributes.parcel_id != '') {
            dataList.push(blightData);
          }
          break;

        case 'salesHistoryData':
          if (parcelData.attributes.parcel_id != null && parcelData.attributes.parcel_id != '') {
            dataList.push(salesHistoryData);
          }
          break;

        case 'fireEscrow':
          if (parcelData.attributes.parcel_id != null && parcelData.attributes.parcel_id != '') {
            dataList.push(fireEscrow);
          }
          break;

        case 'nez':
          dataList.push(nezHomestead);
          break;

        case 'nrsa':
          dataList.push(nrsa);
          break;

        case 'npo':
          dataList.push(npo);
          break;

        case 'improve-det':
          dataList.push(improveDet);
          break;

        case 'recycling':
          dataList.push(recycling);
          break;

        case 'rental-data':
          if (parcelData.attributes.parcel_id != null && parcelData.attributes.parcel_id != '') {
            dataList.push(rentalData);
          }
          break;

        case 'rental-cert':
          dataList.push(rentalCertData);
          break;

        case 'demo-status':
          if (parcelData.attributes.parcel_id != null && parcelData.attributes.parcel_id != '') {
            dataList.push(demoStatus);
          }
          break;

        case 'demos-data':
          dataList.push(demosData);
          break;

        case 'stabilization-data':
          dataList.push(stabilizationData);
          break;

        case 'schools':
          dataList.push(schools);
          break;

        case 'historicDistrict':
          dataList.push(historicDistrict);
          break;

        case 'district-managers':
          dataList.push(districtManagers);
          break;

        case 'district-inspectors':
          dataList.push(districtInspectors);
          break;

        case 'council-members':
          dataList.push(councilMembers);
          break;

        case 'DWSDBackupProtection':
          dataList.push(DWSDBackupProtection);
          break;

        default:
          break;
      }
    });
    return dataList;
  }

  buildCouncilData(data) {
    let councilData = {
      council: {
        district: `District ${data.council.data.attributes.council_district}`,
        districtURL: null,
        name: null,
        url: null,
        phone: null
      },
      dmanager: {
        name: null,
        url: `/departments/department-of-neighborhoods/district-${data.council.data.attributes.council_district}#block-views-block-contacts-special-block-1`,
        phone: null
      },
      ddmanager: {
        name: null,
        url: `/departments/department-of-neighborhoods/district-${data.council.data.attributes.council_district}#block-views-block-contacts-special-block-1`,
        phone: null
      },
      bliaision: {
        name: null,
        email: null
      },
      enforcement: {
        name: null,
        phone: null
      }
    };
    switch (data.council.data.attributes.council_district) {
      case "1":
        councilData.council.districtURL = `/taxonomy/term/1276`;
        data['council-members'].data.forEach((item) => {
          if (item.tid == '1276') {
            councilData.council.name = item.field_organization_head_name;
            councilData.council.url = `/taxonomy/term/1276`;
            councilData.council.phone = item.field_phone;
          }
        });
        data['district-managers'].data.forEach((item) => {
          if (item.field_contact_position.includes('District 1 Manager')) {
            councilData.dmanager.name = item.title;
            councilData.dmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 1 Deputy Manager')) {
            councilData.ddmanager.name = item.title;
            councilData.ddmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 1 Business Liaison')) {
            councilData.bliaision.name = item.title;
            councilData.bliaision.email = item.field_email_address;
          }
        });
        data['district-inspectors'].data.forEach((item) => {
          if (item.field_responsibilities.includes('District 1')) {
            councilData.enforcement.name = item.title;
            councilData.enforcement.phone = item.field_telephone;
          }
        });
        break;

      case "2":
        councilData.council.districtURL = `/taxonomy/term/1476`;
        data['council-members'].data.forEach((item) => {
          if (item.tid == '1476') {
            councilData.council.name = item.field_organization_head_name;
            councilData.council.url = `/taxonomy/term/1476`;
            councilData.council.phone = item.field_phone;
          }
        });
        data['district-managers'].data.forEach((item) => {
          if (item.field_contact_position.includes('District 2 Manager')) {
            councilData.dmanager.name = item.title;
            councilData.dmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 2 Deputy Manager')) {
            councilData.ddmanager.name = item.title;
            councilData.ddmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 2 Business Liaison')) {
            councilData.bliaision.name = item.title;
            councilData.bliaision.email = item.field_email_address;
          }
        });
        data['district-inspectors'].data.forEach((item) => {
          if (item.field_responsibilities.includes('District 2')) {
            councilData.enforcement.name = item.title;
            councilData.enforcement.phone = item.field_telephone;
          }
        });
        break;

      case "3":
        councilData.council.districtURL = `/taxonomy/term/1481`;
        data['council-members'].data.forEach((item) => {
          if (item.tid == '1481') {
            councilData.council.name = item.field_organization_head_name;
            councilData.council.url = `/taxonomy/term/1481`;
            councilData.council.phone = item.field_phone;
          }
        });
        data['district-managers'].data.forEach((item) => {
          if (item.field_contact_position.includes('District 3 Manager')) {
            councilData.dmanager.name = item.title;
            councilData.dmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 3 Deputy Manager')) {
            councilData.ddmanager.name = item.title;
            councilData.ddmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 3 Business Liaison')) {
            councilData.bliaision.name = item.title;
            councilData.bliaision.email = item.field_email_address;
          }
        });
        data['district-inspectors'].data.forEach((item) => {
          if (item.field_responsibilities.includes('District 3')) {
            councilData.enforcement.name = item.title;
            councilData.enforcement.phone = item.field_telephone;
          }
        });
        break;

      case "4":
        councilData.council.districtURL = `/taxonomy/term/1486`;
        data['council-members'].data.forEach((item) => {
          if (item.tid == '1486') {
            councilData.council.name = item.field_organization_head_name;
            councilData.council.url = `/taxonomy/term/1486`;
            councilData.council.phone = item.field_phone;
          }
        });
        data['district-managers'].data.forEach((item) => {
          if (item.field_contact_position.includes('District 4 Manager')) {
            councilData.dmanager.name = item.title;
            councilData.dmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 4 Deputy Manager')) {
            councilData.ddmanager.name = item.title;
            councilData.ddmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 4 Business Liaison')) {
            councilData.bliaision.name = item.title;
            councilData.bliaision.email = item.field_email_address;
          }
        });
        data['district-inspectors'].data.forEach((item) => {
          if (item.field_responsibilities.includes('District 4')) {
            councilData.enforcement.name = item.title;
            councilData.enforcement.phone = item.field_telephone;
          }
        });
        break;

      case "5":
        councilData.council.districtURL = `/taxonomy/term/1346`;
        data['council-members'].data.forEach((item) => {
          if (item.tid == '1346') {
            councilData.council.name = item.field_organization_head_name;
            councilData.council.url = `/taxonomy/term/1346`;
            councilData.council.phone = item.field_phone;
          }
        });
        data['district-managers'].data.forEach((item) => {
          if (item.field_contact_position.includes('District 5 Manager')) {
            councilData.dmanager.name = item.title;
            councilData.dmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 5 Deputy Manager')) {
            councilData.ddmanager.name = item.title;
            councilData.ddmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 5 Business Liaison')) {
            councilData.bliaision.name = item.title;
            councilData.bliaision.email = item.field_email_address;
          }
        });
        data['district-inspectors'].data.forEach((item) => {
          if (item.field_responsibilities.includes('District 5')) {
            councilData.enforcement.name = item.title;
            councilData.enforcement.phone = item.field_telephone;
          }
        });
        break;

      case "6":
        councilData.council.districtURL = `/taxonomy/term/1491`;
        data['council-members'].data.forEach((item) => {
          if (item.tid == '1491') {
            let cleanPhone = item.field_phone.replace('Office: ', '');
            cleanPhone = cleanPhone.replace(/ /g, '-');
            cleanPhone = cleanPhone.replace(/[()]/g, '');
            councilData.council.name = item.field_organization_head_name;
            councilData.council.url = `/taxonomy/term/1491`;
            councilData.council.phone = `<a href="tel:${cleanPhone}">${item.field_phone}</a>`;
          }
        });
        data['district-managers'].data.forEach((item) => {
          if (item.field_contact_position.includes('District 6 Manager')) {
            let cleanPhone = item.field_telephone.replace(/ /g, '-');
            cleanPhone = cleanPhone.replace(/[()]/g, '');
            councilData.dmanager.name = item.title;
            councilData.dmanager.phone = `<a href="tel:${cleanPhone}">${item.field_telephone}</a>`;
          }
          if (item.field_contact_position.includes('District 6 Deputy Manager')) {
            let cleanPhone = item.field_telephone.replace(/ /g, '-');
            cleanPhone = cleanPhone.replace(/[()]/g, '');
            councilData.ddmanager.name = item.title;
            councilData.ddmanager.phone = `<a href="tel:${cleanPhone}">${item.field_telephone}</a>`;
          }
          if (item.field_contact_position.includes('District 6 Business Liaison')) {
            councilData.bliaision.name = item.title;
            councilData.bliaision.email = item.field_email_address;
          }
        });
        data['district-inspectors'].data.forEach((item) => {
          if (item.field_responsibilities.includes('District 6')) {
            let cleanPhone = item.field_telephone.replace(/ /g, '-');
            cleanPhone = cleanPhone.replace(/[()]/g, '');
            councilData.enforcement.name = item.title;
            councilData.enforcement.phone = `<a href="tel:${cleanPhone}">${item.field_telephone}</a>`;
          }
        });
        break;

      case "7":
        councilData.council.districtURL = `/taxonomy/term/1511`;
        data['council-members'].data.forEach((item) => {
          if (item.tid == '1511') {
            councilData.council.name = item.field_organization_head_name;
            councilData.council.url = `/taxonomy/term/1511`;
            councilData.council.phone = item.field_phone;
          }
        });
        data['district-managers'].data.forEach((item) => {
          if (item.field_contact_position.includes('District 7 Manager')) {
            councilData.dmanager.name = item.title;
            councilData.dmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 7 Deputy Manager')) {
            councilData.ddmanager.name = item.title;
            councilData.ddmanager.phone = item.field_telephone;
          }
          if (item.field_contact_position.includes('District 7 Business Liaison')) {
            councilData.bliaision.name = item.title;
            councilData.bliaision.email = item.field_email_address;
          }
        });
        data['district-inspectors'].data.forEach((item) => {
          if (item.field_responsibilities.includes('District 7')) {
            councilData.enforcement.name = item.title;
            councilData.enforcement.phone = item.field_telephone;
          }
        });
        break;

      default:
        // console.log('not inside city');
        break;
    }
    return councilData;
  }

  getData(loader) {
    const app = document.getElementsByTagName('my-home-info');
    const activeDataSets = app[0].getAttribute('data-active-sets').split(',');
    const parcelData = JSON.parse(app[0].getAttribute('data-parcel-id'));
    const storedData = JSON.parse(app[0].getAttribute('data-api-stored-datasets'));
    let dataAlreadyLoaded = false;
    for (let key in storedData) {
      if (activeDataSets.includes(key)) {
        dataAlreadyLoaded = true;
      }
    }
    if (dataAlreadyLoaded) {
      let dataSets = {};
      activeDataSets.forEach(data => {
        dataSets[data] = storedData[data];
      });
      app[0].setAttribute('data-api-active-datasets', JSON.stringify(dataSets));
      app[0].setAttribute('data-app-state', 'results');
    } else {
      let dataList = loader.getDataSets();
      Promise.all(dataList).then(values => {
        let dataSets = {};
        for (let key in values) {
          if (values[key] != null) {
            dataSets[values[key].id] = values[key];
          } else {
            initialLoadChecker = false;
          }
        }
        if (activeDataSets.includes('council')) {
          let councilData = loader.buildCouncilData(dataSets);
          dataSets['council-members'] = { id: 'council-members', data: councilData.council };
          let dManagers = { manager: councilData.dmanager, deputy: councilData.ddmanager }
          dataSets['district-managers'] = { id: 'district-managers', data: dManagers };
          dataSets['business-liaison'] = { id: 'business-liaison', data: councilData.bliaision };
          dataSets['district-inspectors'] = { id: 'district-inspectors', data: councilData.enforcement };
        }
        if (activeDataSets.includes('DWSDBackupProtection')) {
          try {
            if (!dataSets.DWSDBackupProtection) {
              dataSets.DWSDBackupProtection = { id: 'DWSDBackupProtection', data: dataSets['neighborhood'].data };
            }
          } catch (error) {
            // console.log(error);
          }
        }
        app[0].setAttribute('data-api-active-datasets', JSON.stringify(dataSets));
        app[0].setAttribute('data-app-state', 'results');
      }).catch(reason => {
        // console.log(reason);
      });
    }
  }

  clearLoader(loader) {
    const shadow = loader.shadowRoot;
    while (shadow.firstChild) {
      shadow.removeChild(shadow.firstChild);
    }
  }

  loadLoader(loader) {
    const shadow = loader.shadowRoot;
    const loaderWrapper = document.createElement('section');
    loaderWrapper.id = 'loader-wrapper';
    switch (loader.getAttribute('data-loader-state')) {
      case 'active':
        loader.getData(loader);
        const textWelcome = document.createElement('p');
        textWelcome.innerText = 'Loading DATA';
        loaderWrapper.appendChild(textWelcome);
        shadow.appendChild(loaderWrapper);
        break;

      case 'finished':
        const text = document.createElement('p');
        text.innerText = 'Data loaded';
        loaderWrapper.appendChild(text);
        shadow.appendChild(loaderWrapper);
        break;

      default:

        break;
    }
  }
}
