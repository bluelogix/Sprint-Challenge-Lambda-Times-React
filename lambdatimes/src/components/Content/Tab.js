import React from 'react';
import PropTypes from 'prop-types'


 /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */


         const Tab = props => {
          /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
              if they match, the className should be: 'tab active-tab', 
              if it is not it should just be 'tab'*/
        
              console.log(props.tab)
            
        
          return (
            <div
              className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
              onClick={() => { 
                props.selectTabHandler(props.tab) }}
            >
              {props.tab.toUpperCase()}
            </div>
          );
          };

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;


        