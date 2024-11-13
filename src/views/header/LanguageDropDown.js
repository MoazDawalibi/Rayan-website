import React from "react";
import { Dropdown } from "react-bootstrap";
import i18next from "i18next";

import { languageConfig } from "configs/languageConfig";

export const LanguageDropDown = () => {
  const activeLanguageCode = i18next.language;
  const activeLanguage = languageConfig.find((ln) => ln.code === activeLanguageCode);

  const handleSelect = (newLangCode) => {
    i18next.changeLanguage(newLangCode);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle className="dropdown-toggle" id="dropdown-basic">
        <h6 style={{ marginBottom: 0, fontSize: "smaller" }}>{activeLanguage.collapsedName}</h6>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languageConfig.map((lang) => {
          const isDisabled = lang.code === activeLanguageCode;

          return (
            <Dropdown.Item disabled={isDisabled} key={lang.countryCode} eventKey={lang.code}>
              <div className="d-flex align-items-center">
                <span style={{ color: "#741d46" }} className={`mx-3 ${isDisabled ? "text-muted" : ""}`}>
                  {lang.name}
                </span>
              </div>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
