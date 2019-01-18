import React from 'react';
import PropTypes from 'prop-types'


import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          {props.tabs.map(tab => {
            return <Tab key={tab} tab={props.tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler}/>
          })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!


Tabs.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func
}



/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
export default Tabs;


 