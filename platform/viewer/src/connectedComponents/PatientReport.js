import { Icon } from '@ohif/ui/src/elements/Icon';
import React from 'react';
import './PatientInformationsPanel.css';

export const PatientReport = props => {
  const { togglePatientInfoPanel } = props;
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
      <div className="patientReportContainer">
        <div className="patientReportHeader">
          <h4>Klinischer Endbefund</h4>
        </div>
        <div className="patientDate">
          <h5>30.09.2020,14:12</h5>
        </div>
        <div className="paragraph Container">
          <p>
            Herr/Frau XX wurde aufgrund oben genannter Symptomatik und Anamnese
            stationar aufgenommen. Eine akute Hirnblutung als Ursache der
            Somnolenz konnte durch ein CCT ausgeschlossen werden.
          </p>
        </div>
        <div className="paragraph Container">
          <p>
            Laborchemisch konnte als Ursache der beschrieben Symptomatik ein
            erhohter Lithiumspiegel von XX mmol/l festgestellt werden (thrapeur,
            Bereich: XX mmol/l). Unter intravenoser Flussigkeitssubstitution
            fielend die Lithiumspiegel in den therapeutischen Bereich ab und es
            kam zu einer zuglgen Besserung des klinischen Befindens. Inder
            Monitoruberwaschung zeigte sich durchegehend ein normofrequenter
            Sinusrhytmus ohne Naschweis von signifikanten Pausen, Blocklerungen
            oder hohergradlgen Herzrthythmusstorungen.
          </p>
        </div>
        <div className="paragraph Container">
          <p>
            In Ruschsprache mit unseren Kollegen der Psychiatrie ist eine
            Fortsetzung der Lithiumbehandlung in zunachst reduzierter Dosis
            (Dosis wurde auf XX mg reduziert) moglich, sollte jedoch unter
            engmaschiger Kontrolle der Lithiumspiegel, Elektrolyte und
            Nierenretentionsparameter erfolgen. Wir entlassen Frau/Herm XX am XX
            in gebesserten Allgemeinzustand in Ihre weitere hausarztliche
            Behandlung un dankend fur die kollegale Zusammenarbeit.
          </p>
        </div>
      </div>
    </div>
  );
};
