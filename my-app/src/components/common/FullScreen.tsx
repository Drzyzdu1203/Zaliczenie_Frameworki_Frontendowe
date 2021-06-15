import React from "react";
import "./CommonStyles.css";
import $ from 'jquery';
import "../EntitiesPage/EntitiesPage.css";

class FullScreen extends React.Component {
    componentDidMount() {
        $("#btnFS").click(function(){
            $("#div2").toggleClass("EntitiesPageFullScreen");
          
          
        return(
            <div>
                  <input type="button" id="btnFS" className="BtnFS" value="Full Screen" />
                  <div id="div2" className="EntitiesPage"></div>
    
              </div>
        );
      });
    
   }
    
   
 }
  export default FullScreen;