import React from 'react';
import './MoreOptionsBoxPanel.css';
import {
  formatDICOMDate,
  formatDICOMTime,
} from '../../../../extensions/cornerstone/src/utils/formatStudy';
import { Icon } from '@ohif/ui/src/elements/Icon';
import { useState } from 'react';
import { PatientInformationsPanel } from './PatientInformationsPanel';

export const MoreOptionsBoxPanel = props => {
  var { isMoreOptionsOpen, togglePatientInfo, toggleMoreOptionsPanel } = props;
  const togglePatientInfoHandler = () => {
    togglePatientInfo(true, false);
    toggleMoreOptionsPanel();
  };
  const togglePatientReportHandler = () => {
    togglePatientInfo(false, true);
    toggleMoreOptionsPanel();
  };
  return (
    <>
      {isMoreOptionsOpen && (
        <div className="moreOptionsBoxPanelContainer">
          <div
            className="moreOptionsBoxPanelListItem"
            onClick={togglePatientInfoHandler}
          >
            <Icon
              className="moreOptionsBoxPanelItemIcon"
              name="written-paper"
            />
            <h5>Befünd öffnen</h5>
          </div>
          <hr></hr>
          <div className="moreOptionsBoxPanelListItem">
            <Icon className="moreOptionsBoxPanelItemIcon" name="star-icon" />
            <h5>Nur Key Images anzeigen</h5>
          </div>
          <hr></hr>
          <div
            className="moreOptionsBoxPanelListItem"
            onClick={togglePatientReportHandler}
          >
            <Icon className="moreOptionsBoxPanelItemIcon" name="info-icon" />
            <h5>Bildmetadaten öffnen</h5>
          </div>
        </div>
      )}
    </>
  );
};
