# REPORT

I used alias names by ".as( )" to explain for you what i got items by its name/id..etc from cypress inspector 
.wait(1000) need to be used because when i observe a grade for a specific goal it must wait because if it didn't wait a second the next process that is display a filter of observed goals will not exist there
should('be.checked') is used to ensure that the checkbox is checked, and should('not.be.checked') is used to ensure that its not checked
cy.contains('button','Apply filters') - means get the <button> that contains "Apply filters" text
  
  cy.on('window:alert', (message) => {
            expect(message).to.equal('Please selet a group');
          });
  
  this used after clicking on the apply filter with some required checkboxes that is unselected and must be selected
  this code gets the alert displayed on the real browser and compares it with 'Please selet a group' if its true it means that the alert is displayed event if you   didn't see it in the video, BECAUSE WHEN I COMPARED IT WITH AN MESSAGE THAT IS NOT THE SAME THE TEST CASE FAILS
  
  and finally environment variables are required because of security cause (and maybe for reusability but here no need for reusablity), but i uploaded it here to see that i made env variables, and base url is declared in the config for easier visits if the link is too long then "/" indicates that it's the same link as declared in the config

Verify all levels filter without goal selection and group selection: This test case checks if an alert is displayed when the user tries to apply filters without selecting a goal and a group.

Verify all levels filter with a goal selection without a group selection: This test case checks if an alert is displayed when the user selects a goal but does not select a group before applying filters.

Verify all goals checkbox with all groups, all levels, and not observed: This test case verifies the behavior when the user selects the "all goals" checkbox, selects "all" groups checkbox, selects the "not observed" checkbox, and applies filters.

Verify all goals checkbox with all groups, all levels, and observed: This test case verifies the behavior when the user selects the "all goals" checkbox, selects "all" groups checkbox, unchecks the "not observed" checkbox, and applies filters.

Verify specific goal checkbox with all groups, all levels, and not observed: This test case checks if the user can select a specific goal, select "all" groups checkbox, select the "not observed" checkbox, and apply filters.

Verify specific goal checkbox with a specific group, all levels, and not observed: This test case verifies the behavior when the user selects a specific goal, selects a specific group, selects the "not observed" checkbox, and applies filters.

Verify specific goal checkbox with a specific group, specific level, and not observed: This test case checks if the user can select a specific goal, select a specific group, select a specific level, select the "not observed" checkbox, and apply filters.

Verify observe specific goal checkbox with a specific group and a specific level and not observed: This test case tests the behavior when the user selects a specific goal, selects a specific group, selects a specific level, selects the "not observed" checkbox, applies filters, and then performs an observation by selecting a grade.

Verify specific goal checkbox with a specific group, specific level, and observed: This test case checks if the user can select a specific goal, select a specific group, select a specific level, unchecks the "not observed" checkbox, and applies filters.

Verify unobserve specific goal checkbox with a specific group and a specific level and observed checkbox: This test case tests the behavior when the user selects a specific goal, selects a specific group, selects a specific level, unchecks the "not observed" checkbox, applies filters, and then performs an unobservation.


https://github.com/william94411/CybressHW/assets/77400199/c216881e-b17c-4195-b994-6bcb0aeccd55

