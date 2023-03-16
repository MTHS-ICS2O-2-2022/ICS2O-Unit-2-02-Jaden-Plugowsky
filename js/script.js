// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: March 2023
// This file contains the JS functions for index.html

function doMathClicked() {
  document.getElementById("perimeter-math").innerHTML = "<p class='mdl-content'>The perimeter of this shape is: " + (2 * (5 + 3)) + " cm</p>"
  document.getElementById("area-math").innerHTML =
    "<p class='mdl-content'>The area of this shape is: " + 5 * 3 + " cm²</p>"
}
