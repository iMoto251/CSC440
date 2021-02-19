import React, {Fragment} from 'react';
import DisplayClass from './displayclass';

function checkButton(){
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
}

function Navigation(){
    return(
        <Fragment>
            <button onClick={checkButton} class="dropdown-btn">Projects for Fall Courses</button>
            <div class="dropdown-container" style={{display: "none"}}>
                <button onClick={DisplayClass} id="CSC411">CSC411</button>
                <button onClick={DisplayClass} id="CSC414">CSC414</button>
                <button onClick={DisplayClass} id="CSC440">CSC440</button>
            </div> 
            <button onClick={checkButton} class="dropdown-btn">Projects for Spring Courses</button>
            <div class="dropdown-container" style={{display: "none"}}>
                <button onClick={DisplayClass} id="CSC441">CSC441</button>
                <button onClick={DisplayClass} id="CSC424">CSC424</button>
            </div>
        </Fragment>
    );
}

export default Navigation;
