# WDW Schedule Scraper
## Authors and Contributors
- Ace Baugh

## Description
### Reason
There used to be an app that would easily grab schedules from the WDW Schedule app. With the new security in place this is nigh impossible. This app intends to replace the old one and be used on chrome browsers to add schedules to a google calendar with a simple button press.

### Functionality
- Grabs schedule information from secure website after page has been loaded for 5 seconds
- Copies data to the computer's clipboard
- *BONUS* WDW Schedule Scraper CSS file
  - Adds color to Schedule View Website

### About
- Copyright 2023
- Version 2.0.0

### Desired functionality
- Connect to google calendar api
- Check for duplicates in current calendar
- Replace outdated shifts with correct ones (if schedule changes)
- Add schedules to a google calendar with a simple button press
- Automatically check for schedule changes at 5pm and update calendar accordingly

## How to use

### How to Install this Extension (Desktop Only)
- Download source code into a new folder
- Open Google Chrome 
- Select the three (3) dots icon from the top right of the browser.
- Go to Settings
- Select "Extensions" from the left side menu
- Make sure "Developer mode" is switched on
- Select "Load unpacked" 
- Locate and select the new folder with the source code in it
- Open https://scheduleview.disney.com in another tab
- Sign in and enjoy the new colour scheme
  
### CSS Alterations
- Feel free to play with the CSS to your liking. Once you are done, you MUST refresh the extension located in the settings of the browser.
- Use Chrome Dev Tools to play around before committing to changing the code. 

### How to add schedule to Google Calendar
#### Save Schedule as a CSV file
- Install the WDW Schedule Scraper extension
- Go to https://scheduleview.disney.com
  - *Warning* If your Schedule page is not a different color
  - installation failed and try installing it again
- Acknowledge the Alert on the page and select the "For Cast Mobile: Click Here"
- Login to your Disney Account if needed
- Acknowledge the Alert on the page
- Open a new note in notepad.exe on your computer
- Paste the schedule into the document
  - Ctrl-V to paste the schedule
  - **OR**
  - Go to Edit in the menu and select paste
- Go to File in the menu and select Save As...
- Save file as "Schedule.csv" with the quotes around it.


#### Import CSV to Google Calendar
- Log into or create a new Google Calendar
  - At the moment, if you are currently using Google Calendar for your main calendar, we recommend you create a new Google Calendar under a different account as you will need to clear and delete all existing events from your Google Calendar in order to import new shifts. The other option is to delete each up coming shift from your Google Calendar before importing any new shifts as there will be duplicates created every time you import a new schedule
- Delete all existing future shifts from your Google Calendar
  - Select the shift you want to delete and select the trash icon to delete
  - **OR**
  - Select the Gear icon from the top menu and select "Settings"
  - In the Left Panel, select the calendar and scroll to the bottom of the page
  - Under the "Remove Calendar", select the "Delete" button. (This will remove all shifts and events from the calendar)
  - Select "Permanently delete" from the popup
- Select the "Import & Export" link from the left side panel of the page
- Under "Import", select "Select file from your computer" and find the "Schedule.scv" file on your computer and open it
- Select the "Import" button and then go back to your calendar to view it

#### ***Optional*** Share you calendar with your main calendar
 - If this is not your main calendar that you use for all other events, you can share this calendar to be seen in you main calendar
 - Look up how to share your calendar with other calendars on Google and follow those steps