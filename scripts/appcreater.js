app = document.getElementsByClassName("safariapp")[0]
appheader = document.getElementsByClassName("safariappheader")[0]
appname = "safari"
        
        dragElement();

      function dragElement() {
          var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          appheader.onmousedown = dragMouseDown;
          }
        
          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            app.style.top = (app.offsetTop - pos2) + "px";
            app.style.left = (app.offsetLeft - pos1) + "px";
          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
          }
        


  // resizable

    let divs = Array.from(document.getElementsByClassName(appname + "app")),
    minWidth = 420,
    minHeight = 73,
    isResizing = false;

  divs.forEach(div => {
  div.addEventListener('mousedown', mousedown);
  //select the resizers
  let resizers = div.querySelectorAll('.resizer');

  resizers.forEach(function(resizer) {
    resizer.addEventListener('mousedown', mousedownOnresizer);
  })

  function mousedownOnresizer(e) {
      let prevX = e.clientX,
          prevY = e.clientY,
          currentresizer = e.target,
          rect = div.getBoundingClientRect(),
          prevLeft = rect.left,
          prevTop  = rect.top,
          newWidth,
          newHeight;

      isResizing = true;

      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup);


      function mousemove(e){
        let newX = prevX - e.clientX, //negative to the right, positive to the left
            newY = prevY - e.clientY; //negative to the bottom, positive to the top
        if (currentresizer.classList.contains('bottom-right')) {
          newWidth = rect.width - newX;
          newHeight = rect.height - newY;
          if (newWidth > minWidth) {
            div.style.width = newWidth + 'px';
          }
          if (newHeight > minHeight) {
            div.style.height = newHeight + 'px';
          }

        }
        else if (currentresizer.classList.contains('bottom-left')) {
          newWidth = rect.width + newX;
          newHeight = rect.height - newY;

          if (newWidth > minWidth) {
            div.style.left = prevLeft - newX + 'px';
            div.style.width = newWidth + 'px';
          } 
          if (newHeight > minHeight) {
            div.style.height = newHeight + 'px';
          }

        }
        else if (currentresizer.classList.contains('top-right')) {
          newWidth = rect.width - newX;
          newHeight = rect.height + newY;

          if (newWidth > minWidth) {
            div.style.width = newWidth + 'px';
          }
          if (newHeight > minHeight) {
            div.style.top = prevTop - newY + 'px';
            div.style.height = newHeight + 'px';
          }

        }
        else if (currentresizer.classList.contains('top-left')) {
          newWidth = rect.width + newX;
          newHeight = rect.height + newY;

          if (newWidth > minWidth) {
            div.style.left = prevLeft - newX + 'px';
            div.style.width = newWidth + 'px';
          }
          if (newHeight > minHeight) {
            div.style.top = prevTop - newY + 'px';
            div.style.height = newHeight + 'px';
          }
        }
        else if (currentresizer.classList.contains('top')) {
          newHeight = rect.height + newY;

          if (newHeight > minHeight) {
            div.style.top = prevTop - newY + 'px';
            div.style.height = newHeight + 'px';
          }
        }
        else if (currentresizer.classList.contains('left')) {
          newWidth = rect.width + newX;
    
          if (newWidth > minWidth) {
            div.style.left = prevLeft - newX + 'px';
            div.style.width = newWidth + 'px';
          }
        }
        else if (currentresizer.classList.contains('bottom')) {
          newHeight = rect.height - newY;

          if (newHeight > minHeight) {
            div.style.height = newHeight + 'px';
          }
        }
        else if (currentresizer.classList.contains('right')) {
          newWidth = rect.width - newX;

          if (newWidth > minWidth) {
            div.style.width = newWidth + 'px';
          }
        }
      }
      

      function mouseup() {
        isResizing = false;
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
      }
    }
  })


  function mousedown(e) {
  //get the initial mouse corrdinates and the position coordinates of the element
  let div = this,
      prevX = e.clientX,
      prevY = e.clientY,
      rect = div.getBoundingClientRect(),
      prevLeft = rect.left,
      prevTop  = rect.top;

  function mousemove(e) {
      //get horizontal and vertical distance of the mouse move
      let newX = prevX - e.clientX, //negative to the right, positive to the left
          newY = prevY - e.clientY; //negative to the bottom, positive to the top

      //set coordinates of the element to move it to its new position
      div.style.left = prevLeft - newX + 'px';
      div.style.top = prevTop - newY + 'px';
  }
  }