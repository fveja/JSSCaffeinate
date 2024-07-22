# JSS Caffeinate
#### JSS Caffeinate triggers the Jamf keep alive mechanism, on all tabs it is running on, keeping you logged in.

## Why
JSS Caffeinate comes out of frusturation of constantly having to re-login when working with multiple tabs.

## How to use
To use this, you'll need to load it in a userscript browser plugin.  See blow for some plugins I know about.

Once loaded, change the `// @match` line to match your JSS URL, but don't include a port number.

### Userscript Plugins
[Grease Monkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)<br>
[Tamper Monkey](https://www.tampermonkey.net)<br> 
[Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)<br>
Other

## Change log
* v 0.3 fixed a glitch a the debug flag was not initialized properly which made the script not run
