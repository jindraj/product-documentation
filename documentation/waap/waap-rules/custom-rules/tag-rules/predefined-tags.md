---
title: predefined-tags
displayName: Predefined tags
published: true
order: 10
pageTitle: Check the list of Gcore predefined tags | Gcore
pageDescription: View all available predefined tags and use them in custom rules.
---
# Predefined tags and their descriptions

We offer a range of predefined tags that you can use to filter and sanction web requests. These tags are generated by a <a href="https://gcore.com/docs/waap/about-waap#behavioral-component" target="_blank">behavioral component</a>, which analyzes the traffic based on heuristics and AI models. Using these tags, you can configure tag-based rules both in the Customer Portal and via API.  

Check the following table for a full list of predefined tags, their API slugs, and descriptions. For details on how to create tag-based rules, check our <a href="https://gcore.com/docs/waap/waap-rules/custom-rules/tag-rules" target="_blank">dedicated guide</a>.

<table>
<tbody> 
  <tr>
    <th style="width:20%">Tag name</th>
    <th style="width:40%">API slug</th>
    <th style="width:40%">Description</th>
  </tr>
  <tr>
    <td>Abnormal Dynamic Requests</td>
    <td>abnormaldynamicrequests</td>
    <td>This session makes a high number of requests based on the site's average number of requests.</td>
  </tr>
  <tr>
    <td>Abnormal Request Volume</td>
    <td>abnormalrequestvolume</td>
    <td>The traffic from this client is relatively high for this domain.</td>
  </tr>
  <tr>
    <td>Abnormal Traffic Volume</td>
    <td>abnormaltrafficvolume</td>
    <td>The traffic from this IP is relatively high for this domain.</td>
  </tr>
  <tr>
    <td>Abuse.ch</td>
    <td>abusech</td>
    <td>This malicious client was detected by Abuse.ch.</td>
  </tr>
  <tr>
    <td>Ajax Scraper</td>
    <td>ajaxscraper</td>
    <td>The number of ajax requests in this session is much higher compared to other sessions on this domain.</td>
  </tr>
  <tr>
    <td>Anonymized Traffic</td>
    <td>anonymizedtraffic</td>
    <td>This IP's provisioned traffic has several requests from an unidentified client.</td>
  </tr>
  <tr>
    <td>Anonymizer Fingerprint</td>
    <td>anonymizedfp</td>
    <td>This fingerprint belongs to an anonymizer service.</td>
  </tr>
  <tr>
    <td>Apache Struts</td>
    <td>aps</td>
    <td>This client attempted to exploit an Apache Struts vulnerability.</td>
  </tr>
  <tr>
    <td>Authentic User Agent</td>
    <td>authenticuseragent</td>
    <td>The user agent reported by the client is valid.</td>
  </tr>
  <tr>
    <td>Automated Client</td>
    <td>automatedclient</td>
    <td>This client made identical, automated requests to the site's resources.</td>
  </tr>
   <tr>
    <td>Automated Dynamic Requests</td>
    <td>automateddynamicrequests</td>
    <td>This client made automated requests to the site's dynamic pages.</td>
  </tr>
  <tr>
    <td>Automation Driver</td>
    <td>automationdriver</td>
    <td>This client uses an unidentified headless browser.</td>
  </tr>
  <tr>
    <td>BlockList.de</td>
    <td>blocklistde</td>
    <td>This malicious client was detected by BlockList.de.</td>
  </tr>
  <tr>
    <td>Botnet Client</td>
    <td>botnetclient</td>
    <td>This IP is part of a botnet network.</td>
  </tr>
  <tr>
    <td>Browser Based Bot</td>
    <td>browserbasedbot</td>
    <td>This session attempts to refresh the same page continuously to check for any changes.</td>
  </tr>
  <tr>
    <td>Brute Force Attempt</td>
    <td>bruteforceattempt</td>
    <td>This client attempted to forcefully enter a web application's login page.</td>
  </tr>
  <tr>
    <td>Captcha Farm Bot Fingerprint</td>
    <td>captchafarmbotfp</td>
    <td>This client's fingerprint failed the CAPTCHA challenge multiple times.</td>
  </tr>
  <tr>
    <td>Captcha Farm Bot Usertag</td>
    <td>captchafarmbotut</td>
    <td>The client associated with this UserTag failed the CAPTCHA challenge multiple times.</td>
  </tr>
  <tr>
    <td>Captcha Validation Failed</td>
    <td>captchavalidationfailed</td>
    <td>The CAPTCHA challenge was completed by a CAPTCHA farm. Thus, the user isn’t legitimate.</td>
  </tr>
  <tr>
    <td>CDN</td>
    <td>cdn</td>
    <td>This range belongs to a content delivery network company.</td>
  </tr>
  <tr>
    <td>Client Flood</td>
    <td>clientflood</td>
    <td>Multiple clients behind this IP perform requests simultaneously.</td>
  </tr>
  <tr>
    <td>CMS Scanner</td>
    <td>cmsscanner</td>
    <td>This client scans web applications to find specific content management system administration or vulnerable pages.</td>
  </tr>
  <tr>
    <td>Code Injection</td>
    <td>cij</td>
    <td>This client attempted to inject his code into the web application.</td>
  </tr>
  <tr>
    <td>Common Web Application</td>
    <td>cfg</td>
    <td>This client attempted to exploit a common web application vulnerability.</td>
  </tr>
  <tr>
    <td>Confirmed Automation</td>
    <td>confirmedautomation</td>
    <td>This client has been confirmed as being automated, based on the client's behavior and the inability to pass WAF sanction screens.</td>
  </tr>
  <tr>
    <td>Content Scraper</td>
    <td>contentscraper</td>
    <td>This IP scrapped the content of this site.</td>
  </tr>
  <tr>
    <td>Cross Site Request Forgery</td>
    <td>csrf</td> 
    <td>This client attempted an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated.</td>
  </tr>
  <tr>
    <td>Cross Site Scripting</td>
    <td>xss</td> 
    <td>This client attempted Cross-Site Scripting (XSS) injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code.</td>
  </tr>
  <tr>
    <td>DDOS Client</td>
    <td>ddosclient</td> 
    <td>This IP was part of multiple DDoS attacks on this domain.</td>
  </tr>
  <tr>
    <td>DOM Automation</td>
    <td>domautomation</td> 
    <td>This client uses a document object model automation tool to make requests to this site.</td>
  </tr>
  <tr>
    <td>Drupal Admin</td>
    <td>drupaladmin</td> 
    <td>This client is the admin of this Drupal site.</td>
  </tr>
  <tr>
    <td>Dynamic Page Scraper</td>
    <td>injectedscraper</td> 
    <td>The number of dynamic requests in this session is much higher compared to other sessions on this domain.</td>
  </tr>
  <tr>
    <td>Evasive Client</td>
    <td>evasiveclient</td> 
    <td>This client failed to return a JavaScript fingerprint.</td>
  </tr>
  <tr>
    <td>Evasive Traffic</td>
    <td>evasivetraffic</td> 
    <td>This IP had multiple sessions that failed to return a JavaScript fingerprint.</td>
  </tr>
  <tr>
    <td>Exceptionally High Request Volume</td>
    <td>exceptionallyhighrequestvolume</td> 
    <td>This session made a high number of requests. Thus, it was blocked.</td>
  </tr>
  <tr>
    <td>Fake User-Agent</td>
    <td>fakeuseragent</td> 
    <td>This client has been identified with a user agent that’s not compatible with browser properties.</td>
  </tr>
  <tr>
    <td>Glove Extension</td>
    <td>gloveextension</td> 
    <td>This client installed the Glove extension.</td>
  </tr>
  <tr>
    <td>Headless Browser</td>
    <td>headlessbrowser</td> 
    <td>This client uses a web browser without a graphical user interface (GUI).</td>
  </tr>
  <tr>
    <td>Headless Browser Fingerprint</td>
    <td>headlessbrowserfp</td> 
    <td>This client has a fingerprint of a headless browser.</td>
  </tr>
  <tr>
    <td>Hosting Services</td>
    <td>hostingservices</td> 
    <td>This IP belongs to a web hosting company.</td>
  </tr>
  <tr>
    <td>Identified Automation</td>
    <td>identifiedautomation</td> 
    <td>This client has been identified as being automated based on its behavior.</td>
  </tr>
  <tr>
    <td>Injection Attack</td>
    <td>injectionattack</td> 
    <td>Multiple injection attempts were detected.</td>
</tr>
<tr>
    <td>Injection Attempt</td>
    <td>injectionattempt</td> 
    <td>Multiple injection attempts were detected.</td>
</tr>
<tr>
    <td>Intensive Traffic from Fingerprint</td>
    <td>intensivetrafficfromfp</td> 
    <td>There is prolonged traffic coming from this fingerprint.</td>
</tr>
<tr>
    <td>Invalid Captcha Validator</td>
    <td>invalidcaptchavalidator</td> 
    <td>The client has completed the CAPTCHA challenge automatically.</td>
</tr>
<tr>
    <td>Invalid Cookie</td>
    <td>invalidcookie</td> 
    <td>This client presented invalid Gcore’s WAAP cookies.</td>
</tr>
<tr>
    <td>Invalid Fingerprint</td>
    <td>invalidfp</td> 
    <td>This client's fingerprint is not valid.</td>
</tr>
<tr>
    <td>Invalid User Agents</td>
    <td>uag</td> 
    <td>This client has an invalid user agent, a request header string that lets servers and network peers identify the application, operating system, vendor, or version of the client.</td>
</tr>
<tr>
    <td>IP Swapper</td>
    <td>ipswapper</td> 
    <td>This client is switching IPs.</td>
</tr>
<tr>
    <td>Joomla Admin</td>
    <td>joomlaadmin</td> 
    <td>This client is the admin of this Joomla site.</td>
</tr>
<tr>
    <td>Katalon Extension</td>
    <td>katalonextension</td> 
    <td>This client installed the Katalon extension.</td>
</tr>
<tr>
    <td>Known Bot</td>
    <td>knownbot</td> 
    <td>This client is a known bot.</td>
</tr>
<tr>
    <td>Local File Inclusion</td>
    <td>lfi</td> 
    <td>This client attempted to trick the web application into including local files with malicious code.</td>
</tr>
<tr>
    <td>Magento Admin</td>
    <td>magentoadmin</td> 
    <td>This client is the admin for this Magento site.</td>
</tr>
<tr>
    <td>Malicious Crawler</td>
    <td>maliciouscrawler</td> 
    <td>This client violates robots.txt directives.</td>
</tr>
<tr>
    <td>Mechanical Requests</td>
    <td>mechanicalrequests</td> 
    <td>This client makes requests at a steady rate.</td>
</tr>
<tr>
    <td>Modx Admin</td>
    <td>modxadmin</td> 
    <td>This client is the admin of this Modex site.</td>
</tr>
<tr>
    <td>Mouse Device</td>
    <td>mousedevice</td> 
    <td>This client uses a device with a mouse.</td>
</tr>
<tr>
    <td>MOZ Automation Extension</td>
    <td>mozautomationextension</td> 
    <td>This client installed a suspicious extension.</td>
</tr>
<tr>
    <td>Multiple Captcha Validation Fails</td>
    <td>multiplecaptchavalidationfails</td> 
    <td>This client failed the captcha challenge multiple times.</td>
</tr>
<tr>
    <td>Multiple Client Errors</td>
    <td>multipleclienterrors</td> 
    <td>This client received multiple, consecutive 4XX errors.</td>
</tr>
<tr>
    <td>Multiple Concurrent Clients</td>
    <td>multipleconcurrentclients</td> 
    <td>Multiple stable sessions are coming from this IP.</td>
</tr>
<tr>
    <td>Multiple Consecutive Challenges</td>
    <td>multipleconsecutivechallenges</td> 
    <td>This client didn’t complete challenges for multiple consecutive sessions.</td>
</tr>
<tr>
    <td>Multiple Errors</td>
    <td>multipleerrors</td> 
    <td>A session that attempts to map a web application's directory structure.</td>
</tr>
<tr>
    <td>Multiple Failed Challenges</td>
    <td>multiplefailedchallenges</td> 
    <td>This session failed challenges multiple times.</td>
</tr>
<tr>
    <td>Multiple Fake User Agent Sessions</td>
    <td>multiplefakeuasessions</td> 
    <td>This IP had multiple sessions with a user agent that didn’t match the actual client type.</td>
</tr>
<tr>
    <td>Multiple Forbidden Ajax Requests</td>
    <td>multipleforbiddenajaxrequests</td> 
    <td>This IP was forbidden in multiple, consecutive AJAX requests.</td>
</tr>
<tr>
    <td>Multiple Forbidden Requests</td>
    <td>multipleforbiddenrequests</td> 
    <td>This IP was denied access in multiple requests.</td>
</tr>
<tr>
    <td>Multiple Large Sessions</td>
    <td>multiplelargesessions</td> 
    <td>Multiple clients behind this IP have a high number of requests.</td>
</tr>
<tr>
    <td>Multiple No Event Sessions</td>
    <td>multiplenoeventsessions</td> 
    <td>This client had multiple sessions with no UI events.</td>
</tr>
<tr>
    <td>Multiple Refreshed Pages</td>
    <td>multiplerefreshedpages</td> 
    <td>This client refreshed the same URL multiple times consecutively.</td>
</tr>
<tr>
    <td>Multiple Repeated Violations</td>
    <td>multiplerepeatedviolations</td> 
    <td>This client repeatedly failed to complete challenges. As a result, it was confirmed to be automated.</td>
</tr>
<tr>
    <td>No Browser Ajax Calls</td>
    <td>nobrowserajaxcalls</td> 
    <td>This client made requests to AJAX URLs without a browser.</td>
</tr>
<tr>
    <td>No Plugins Fingerprint</td>
    <td>nopluginsfp</td> 
    <td>This client's fingerprint indicates that the client's browser doesn’t have a plugin installed.</td>
</tr>
<tr>
    <td>No UI Events</td>
    <td>nouievents</td> 
    <td>This client didn’t create UI events.</td>
</tr>
<tr>
    <td>Non-Scriptable Client</td>
    <td>nonscriptableclient</td> 
    <td>This client doesn’t have a JavaScript engine.</td>
</tr>
<tr>
    <td>Not Unique Fingerprint</td>
    <td>fpnotunique</td> 
    <td>There is a high probability that this fingerprint represents multiple clients.</td>
</tr>
<tr>
    <td>Open Redirect</td>
    <td>ord</td> 
    <td>An open redirect attack has been detected. These attacks happen when an attacker manipulates URL queries to redirect users offsite.</td>
</tr>
<tr>
    <td>Personal Identifiable Information</td>
    <td>pii</td> 
    <td>An exposure of personally identifiable information was detected.</td>
</tr>
<tr>
    <td>PhantomJS</td>
    <td>phantomjs</td> 
    <td>This client uses PhantomJS, a scripted, headless browser used for automating web page interaction.</td>
</tr>
<tr>
    <td>PimCore Admin</td>
    <td>pimcoreadmin</td> 
    <td>The PimCore cookie for logged-in admin users was detected.</td>
</tr>
<tr>
    <td>Prolonged Ajax Traffic</td>
    <td>prolongedajaxtraffic</td> 
    <td>The AJAX requests from this IP continued for a long time.</td>
</tr>
<tr>
    <td>Prolonged API Traffic</td>
    <td>prolongedapitraffic</td> 
    <td>The API requests from this IP continued for a long time.</td>
</tr>
<tr>
    <td>Prolonged Dynamic Traffic</td>
    <td>prolongedinjectedtraffic</td> 
    <td>The dynamic requests from this IP continued for a long time.</td>
</tr>
<tr>
    <td>Prolonged Not Injected Traffic</td>
    <td>prolongednotinjectedtraffic</td> 
    <td>The requests from this IP continued for a long time.</td>
</tr>
<tr>
    <td>Protocol Attack</td>
    <td>rhi</td> 
    <td>A protocol attack was detected.</td>
</tr>
<tr>
    <td>Proxy Network</td>
    <td>proxynetwork</td> 
    <td>This IP is part of the anonymizer proxy network.</td>
</tr>
<tr>
    <td>Rapid Requests</td>
    <td>rapidbehaviour</td> 
    <td>This client made multiple fast requests in one or multiple sessions.</td>
</tr>
<tr>
    <td>Remote File Inclusion</td>
    <td>rfi</td> 
    <td>This client attempted to trick the web application into including remote files with malicious code.</td>
</tr>
<tr>
    <td>Request Maker Extension</td>
    <td>requestmakerextension</td> 
    <td>This client installed the Request Maker extension.</td>
</tr>
<tr>
    <td>Scanner</td>
    <td>scanner</td> 
    <td>A client that scans web applications.</td>
</tr>
<tr>
    <td>Selenium</td>
    <td>selenium</td> 
    <td>This client uses Selenium, a portable software-testing framework for web applications.</td>
</tr>
<tr>
    <td>Selenium Extension</td>
    <td>seleniumextension</td> 
    <td>This client installed the Selenium extension.</td>
</tr>
<tr>
    <td>Sensitive Data Exposure</td>
    <td>sde</td> 
    <td>An exposure of sensitive data was detected.</td>
</tr>
<tr>
    <td>Session via Multiple Countries</td>
    <td>multiplecountries</td> 
    <td>This client changed their country-of-origin multiple times in this session.</td>
</tr>
<tr>
    <td>Sessionless Client</td>
    <td>sessionlessclient</td> 
    <td>This client doesn’t maintain a session.</td>
</tr>
<tr>
    <td>Shell Injection</td>
    <td>shi</td> 
    <td>A shell (command) injection attack was detected.</td>
</tr>
<tr>
    <td>ShellShock Attack</td>
    <td>shs</td> 
    <td>This client attempted a ShellShock vulnerability, which in Bash allows remote code execution without confirmation.</td>
</tr>
<tr>
    <td>Sideex Extension</td>
    <td>sideexextension</td> 
    <td>This client installed the Sidexx extension.</td>
</tr>
<tr>
    <td>Site Mapper</td>
    <td>sitemapper</td> 
    <td>This client attempts to map a web application's directory structure.</td>
</tr>
<tr>
    <td>SP Honeypot Scanner</td>
    <td>baitscanner</td> 
    <td>This IP was detected by scanning random servers.</td>
</tr>
<tr>
    <td>Spam Bot</td>
    <td>spambot</td> 
    <td>This IP's client uses automation to generate multiple POST events that are suspected of being spam.</td>
</tr>
<tr>
    <td>Spam Client</td>
    <td>spamclient</td> 
    <td>This client made multiple consecutive POST requests with no referrer header.</td>
</tr>
<tr>
    <td>Spamhaus</td>
    <td>spamhaus</td> 
    <td>This malicious client was detected by Spamhaus.</td>
</tr>
<tr>
    <td>SQL Injection</td>
    <td>sql</td> 
    <td>This client attempted insertion or “injection” of a SQL query via the input data from the client to the application. A successful SQL injection exploit can read sensitive data from the database, modify database data, etc.</td>
</tr>
<tr>
    <td>Static Scraper</td>
    <td>staticscraper</td> 
    <td>The number of static requests in this session is much higher compared to other sessions on this domain.</td>
</tr>
<tr>
    <td>Stop Forum Spam</td>
    <td>stopforumspam</td> 
    <td>This malicious client was detected by Stop Forum Spam.</td>
</tr>
<tr>
    <td>Suspected Automation</td>
    <td>suspectedautomation</td> 
    <td>This traffic is suspected of being automated based on the traffic's behavior.</td>
</tr>
<tr>
    <td>Suspected Automation Fingerprint</td>
    <td>suspiciousfp</td> 
    <td>This fingerprint belongs to a suspicious client.</td>
</tr>
<tr>
    <td>Suspected Automation User Tag</td>
    <td>suspiciousut</td> 
    <td>This user tag belongs to a suspicious client.</td>
</tr>
<tr>
    <td>Suspected Proxy Network</td>
    <td>suspectedproxynetwork</td> 
    <td>This IP is suspected of being part of a proxy network.</td>
</tr>
<tr>
    <td>Suspicious Local IP</td>
    <td>suspiciouslocalip</td> 
    <td>This session is making a high number of web page requests.</td>
</tr>
<tr>
    <td>Suspicious Scraper</td>
    <td>notinjectedscraper</td> 
    <td>The number of suspicious requests in this session is much higher compared to other sessions on this domain.</td>
</tr>
<tr>
    <td>Thousand Eyes Extension</td>
    <td>thousandeyesextension</td> 
    <td>This client installed the Thousand Eyes extension.</td>
</tr>
<tr>
    <td>TOR Network</td>
    <td>tor</td> 
    <td>This client is part of a TOR anonymizer network.</td>
</tr>
<tr>
    <td>Touch Device</td>
    <td>touchdevice</td> 
    <td>This client uses a touch device.</td>
</tr>
<tr>
    <td>UI Events Detected</td>
    <td>uieventdetected</td> 
    <td>This client created UI events.</td>
</tr>
<tr>
    <td>UI Events Pause</td>
    <td>uieventspause</td> 
    <td>This client stopped creating UI events.</td>
</tr>
<tr>
    <td>Unique Fingerprint</td>
    <td>fpunique</td> 
    <td>There is a high probability that this fingerprint represents a single client.</td>
</tr>
<tr>
    <td>Unverified Anonymized Fingerprint</td>
    <td>unverifiedanonymizedfp</td> 
    <td>This fingerprint is suspected of being part of a VPN / proxy network.</td>
</tr>
<tr>
    <td>Verified Headless Browser</td>
    <td>verifiedheadlessbrowser</td> 
    <td>This client has been verified as a headless browser.</td>
</tr>
<tr>
    <td>Visit Multiple Domains</td>
    <td>visitmultipledomains</td> 
    <td>This client has visited a high number of Gcore domains.</td>
</tr>
<tr>
    <td>VPN Network</td>
    <td>vpnnetwork</td> 
    <td>This IP is part of a VPN network service.</td>
</tr>
<tr>
    <td>Vulnerability Scanner</td>
    <td>vulnerabilityscanner</td> 
    <td>A client that scans web applications for vulnerabilities.</td>
</tr>
<tr>
    <td>Vulnerable Resource</td>
    <td>vuln</td> 
    <td>An attempt to access a vulnerable resource was detected.</td>
</tr>
<tr>
    <td>Web Shell</td>
    <td>wbs</td> 
    <td>This client attempted to upload a web shell. A shell-like interface that enables a web server to be remotely accessed, often for cyber-attacks.</td>
</tr>
<tr>
    <td>Webdriver</td>
    <td>webdriver</td> 
    <td>This client is controlled by automated tools.</td>
</tr>
<tr>
    <td>Wordpress Admin</td>
    <td>wordpressadmin</td> 
    <td>This client is the admin of this WordPress site.</td>
</tr>
<tr>
    <td>WordPress Admin Detection</td>
    <td>wad</td> 
    <td>A WordPress admin dashboard was detected.</td>
</tr>
<tr>
    <td>WordPress Vulnerability</td>
    <td>wps</td> 
    <td>This client attempted to exploit a vulnerability related to the WordPress CMS.</td>
</tr>
<tr>
    <td>XML External Entity</td>
    <td>xxe</td> 
    <td>An XML external entity attack was detected. This attack may lead to the disclosure of confidential data, denial of service, server-side request forgery, and other system impacts.</td>
</tr>
</tbody> 
</table>