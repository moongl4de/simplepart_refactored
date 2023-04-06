import React from "react";
import PartBox from "./PartBox.jsx";
import CategoryMap from "./CategoryMap.jsx";

///////// Note: ideally, this would be programmatically generated w/ an array of objects, could also use 'v-for' in Vue, would be perfect for these category components

function CategoryContainer() {
  return (
    <div
      id="Content_PageBody_QuickStartControl_QuickStartUpdatePanel"
      className="quick-start-update-panel"
    >
      <div
        id="Content_PageBody_QuickStartControl_categoriesSelector"
        className="QuickStartLinksControl"
      >
        <div
          id="Content_PageBody_QuickStartControl_div_quickStartLinks"
          className="quickStart-Categories"
        >
          <div
            id="Content_PageBody_QuickStartControl_QuickStartPlacementAlternative"
            className="quickStartContentWrap qsLinksContainer"
          >
            <div className="quickStartAltTitle">
              <h2>Select a Category</h2>
            </div>
            <div className="quickStartAltText"></div>
          </div>

          <div className="qsLinksContainer">
            <div
              id="Content_PageBody_QuickStartControl_CategoryList"
              className="category-panel"
            >
              <CategoryMap></CategoryMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
