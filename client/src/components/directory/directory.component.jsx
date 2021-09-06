import React from "react";
import { useSelector } from "react-redux";

import { selectsDirectorySection } from "../../redux/directory/directory.selectors";
import MenuItem from "./../menu-item/menu-item.component";

import "./directory.scss";

const Directory = () => {
  const sections = useSelector(selectsDirectorySection);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...SectionProps }) => {
        return <MenuItem key={id} {...SectionProps} />;
      })}
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   sections: selectsDirectorySection,
// });

export default Directory;
