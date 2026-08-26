# AI Work Log

**AI Tools Used:** Gemini Pro and GitHub Copilot

**Important Prompt:**
> "Act as an expert React developer. I need to build a local React application named 'React Account Explorer'. This app must run entirely locally with NO live Salesforce integration, reading data exclusively from a local file named `Account_Sample_Data.json`. Please create a reusable Account component, implement search/filtering by Name, include an empty state, and apply professional styling."

**Problem Caused:**
The AI successfully generated the components and logic, but it assumed slightly different property names for the data mapping (e.g., it used `accountName` instead of just `Name` as it is structured in the provided JSON file). 

**How I Checked and Fixed It:**
When I ran `npm start` to test the application locally, the cards rendered empty. I manually inspected the `Account_Sample_Data.json` structure, identified the mismatched keys, and updated the props inside my `Account.js` component to map exactly to the provided JSON schema. After saving, the data displayed perfectly.
