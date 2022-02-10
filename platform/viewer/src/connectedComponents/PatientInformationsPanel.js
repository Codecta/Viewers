import React from 'react';
import './PatientInformationsPanel.css';
import {
  formatDICOMDate,
  formatDICOMTime,
} from '../../../../extensions/cornerstone/src/utils/formatStudy';
import { Icon } from '@ohif/ui/src/elements/Icon';
import { PatientMetadata } from './PatientMetadata';
import { PatientReport } from './PatientReport';

export const PatientInformationsPanel = props => {
  var {
    patientInfo,
    isPatientInfoOpen,
    togglePatientInfoPanel,
    isMetadata,
    isReport,
  } = props;
  const closePatientInfoHandler = () => {
    togglePatientInfoPanel();
  };

  console.log('patient info ', patientInfo);

  return (
    <>
      {isPatientInfoOpen && isMetadata && (
        <PatientMetadata
          patientInfo={patientInfo}
          togglePatientInfoPanel={togglePatientInfoPanel}
        />
      )}
      {isPatientInfoOpen && isReport && (
        <PatientReport
          patientInfo={patientInfo}
          togglePatientInfoPanel={togglePatientInfoPanel}
        />
      )}
    </>
  );
};
