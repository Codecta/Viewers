import { Icon } from '@ohif/ui/src/elements/Icon';
import React from 'react';
import {
  formatDICOMDate,
  formatDICOMTime,
} from '../../../../extensions/cornerstone/src/utils/formatStudy';
import './PatientInformationsPanel.css';

export const PatientMetadata = props => {
  const { patientInfo, togglePatientInfoPanel } = props;
  const closePatientInfoHandler = () => {
    togglePatientInfoPanel();
  };
  return (
    <div className="patientInformationsContainer">
      <div
        className="patientInfoCloseIconContainer"
        onClick={closePatientInfoHandler}
      >
        <Icon name="close-icon" />
      </div>

      {patientInfo !== undefined ? (
        <div className="patientReportContainer">
          <div className="patientMetadataHeader">
            <h4>Bildmetadaten</h4>
          </div>
          <div className="patientMetadataSubheader">
            <h4>Über den Patienten</h4>
          </div>
          <div className="patientSubheaderContent">
            <p>Name: {patientInfo['PatientName']}</p>
            <p>ID: {patientInfo['PatientID']}</p>
            <p>Geburtsdatum: 10.09.1978</p>
          </div>
          <div className="patientMetadataSubheader">
            <h4>Über die Studie</h4>
          </div>
          <div className="patientSubheaderContent">
            <p>Datum: {formatDICOMDate(patientInfo['StudyDate'])}</p>
            <p>Uhrzeit: {formatDICOMTime(patientInfo['StudyTime'])}</p>
            <p>Beschreibung: {patientInfo['StudyDescription']}</p>
          </div>
          <div className="patientMetadataSubheader">
            <h4>Über die Serie</h4>
          </div>
          <div className="patientSubheaderContent">
            <p>Nummer: {patientInfo['series'].length}</p>
            <p>
              Datum: {formatDICOMDate(patientInfo['series'][0]['SeriesDate'])}
            </p>
            <p>
              Uhrzeit: {formatDICOMTime(patientInfo['series'][0]['SeriesTime'])}
            </p>
            <p>Beschreibung: {patientInfo['series'][0]['SeriesDescription']}</p>
          </div>
          <div className="patientMetadataSubheader">
            <h4>Über die Institution</h4>
          </div>
          <div className="patientSubheaderContent">
            <p>Name: {patientInfo['InstitutionName']}</p>
            <p>Station: {patientInfo['InstitutionStation']}</p>
          </div>
        </div>
      ) : (
        <h3>Loading patient data...</h3>
      )}
    </div>
  );
};
